import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';


const query = graphql`
    {
        allShopifyCollection {
            edges {
              node {
                    products {
                        ...ShopifyProductFields
                        }
                    title
                    description
                
                }
            }
        }
    }
`;


const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
    //this is the bit that wires up the grapghql static query so we can suck it in here awesome!
  const {allShopifyCollection, allShopifyProduct} = useStaticQuery(query);
 
  return (
    <ProductContext.Provider
      value={{
          //maps over the nodes and returns an object for each one
        //products: allShopifyProduct.edges.map(({node})=> node),
        collections: allShopifyCollection.edges.map(({node})=> node),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}