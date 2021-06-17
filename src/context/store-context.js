import React, {useState} from "react"
import fetch from "isomorphic-fetch"
import Client from "shopify-buy"


const client = Client.buildClient(
  {
    domain: process.env.GATSBY_SHOPIFY_STORE_URL,
    storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
  },
  fetch
)

const defaultState = {
  client,
  cart: {},
}

console.log(defaultState,'from context');

export const StoreContext = React.createContext(defaultState)
export default StoreContext;

export const StoreProvider = ({ children }) => {
//Checkout
  const [checkout, setCheckout] = useState(
    JSON.parse(
      typeof window !== 'undefined' ? localStorage.getItem('checkout') : null
    )
  );

  const [successfulOrder, setSuccessfulOrder] = useState(null);
  const checkoutId = checkout?.id;

  //if the order is place sucessfully it ruturns the completedAt and resets the checkout to nul to 
  // ready to start again - but the checkout button is still showing at this point - and needs to 
  // be removed because nothing to put in cart - in Cart add condition render to the button
  React.useEffect(() => {
    const getCheckout = async () => {
      if (checkoutId && typeof window !== 'undefined') {
        const fetchedCheckout = await client.checkout.fetch(checkoutId);
        if (fetchedCheckout?.completedAt) {
          localStorage.removeItem('checkout');
          setCheckout(null);
          setSuccessfulOrder(fetchedCheckout);
        } else {
          setCheckout(fetchedCheckout);
          localStorage.setItem('checkout', JSON.stringify(fetchedCheckout));
        }
      }
    };

    getCheckout();
  }, [setCheckout, setSuccessfulOrder, checkoutId]);
  
//works sweat as a nut
const getProductById = async (handle)=> {
    const product = await client.product.fetchByHandle(handle);
    return product;
  }


//could to start with this one...
  /*const getProductById = async ()=> {
    const product = await client.product.fetchByHandle('hango-stem');
  return console.log(product,'dynamic query from shopify');
  }*/

  //Counldn't get this one to work
    /*const getProductById = async (id)=> {
    const product = await client.product.fetch(id);
  return console.log(product);
  }*/

  const updateLineItem = async ({ variantId, quantity }) => {
    console.log('I amat the store')
    // if no checkout id, create a new checkout
    let newCheckout = checkout || (await client.checkout.create());

    // check to see if this variantId exists in storedCheckout
    const lineItemVariant = newCheckout.lineItems?.find(
      lineItem => lineItem.variant.id === variantId
    );

    if (lineItemVariant) {
      const newQuantity = lineItemVariant.quantity + quantity;

      if (newQuantity) {
        newCheckout = await client.checkout.updateLineItems(newCheckout.id, [
          {
            id: lineItemVariant.id,
            quantity: newQuantity,
          },
        ]);
      } else {
        newCheckout = await client.checkout.removeLineItems(newCheckout.id, [
          lineItemVariant.id,
        ]);
      }
    } else {
      newCheckout = await client.checkout.addLineItems(newCheckout.id, [
        {
          variantId,
          quantity,
        },
      ]);
    }

    setCheckout(newCheckout);
    setSuccessfulOrder(null);
    if (typeof window !== 'undefined') {
      localStorage.setItem('checkout', JSON.stringify(newCheckout));
    }
  };

  const removeLineItem = async lineItemId => {
    const newCheckout = await client.checkout.removeLineItems(checkout.id, [
      lineItemId,
    ]);

    setCheckout(newCheckout);
  };

  const dismissSuccessfulOrder = () => {
    setSuccessfulOrder(null);
  };


  
  
  
  
  
  
  return (
    <StoreContext.Provider
      value={{
        ...defaultState,
        getProductById,
        checkout,
        updateLineItem,
        removeLineItem,
        successfulOrder,
        dismissSuccessfulOrder,
       
      }}
    >
      {children}
    </StoreContext.Provider>
  )






}