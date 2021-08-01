import React from 'react';
import styled from 'styled-components';
import StoreContext from '../context/store-context';
import { RemoveLineItem } from './RemoveLineItem';
import { QuantityAdjuster } from './QuantityAdjuster';
import { Button } from '../components/Button';
import {navigate, useLocation} from '@reach/router';

const CartHeaderStyled = styled.div`
display: grid;
grid-template-columns: 2fr 1fr 2fr 1fr 40px;
font-weight: bold;
border-bottom: 1px solid black;


>div {
    padding: 2em;
}
`;

const CartFooterStyled = styled.div`
display: grid;
grid-template-columns: 5fr 1fr 40px;
>div {
    padding: 2em;
    &:first-child {
        text-align: right;
    }
}
`;

const FooterCheckoutStyled = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
border-top: 1px solid black;
padding: 10px;

`;

const CartItemStyled = styled.div`
border-bottom: 1px solid black;
display: grid;
grid-template-columns: 2fr 1fr 2fr 1fr 40px;
>div {
    padding: 1em;
    &:first-child {
        > div {
        font-weight: bold;
        }
        > div :last-child {
            font-size: 14px;
            color: #999;
            margin-top:4px;
        }
    }
}
`;

const SectionStyled = styled.section`
.yourCart {
    font-size: 1em;
}
`;





export function CartContent() {
    const {checkout, updateLineItem, removeLineItem} = React.useContext(StoreContext);

    const handleAdjustQuantity = ({quantity, variantId}) => {
        updateLineItem({quantity, variantId});
    };

    const handleDelete = ({lineItemId}) => {
        removeLineItem({lineItemId});
    };



    return (
        <sectionStyled>
            <h2 className="youCart">Your Cart</h2>
            <div>
                <CartHeaderStyled>
                    <div>
                        Product
                    </div>
                    <div>
                        Unit Price
                    </div>
                    <div>
                        Quantity
                    </div>
                    <div>
                        Amount
                    </div>
                    
                </CartHeaderStyled>
                   {checkout?.lineItems?.map(item =>(
                       <CartItemStyled key={item.variant.id}>
                           <div>
                                <div>{item.title}</div>
                                <div>{item.variant.title === "Default Title"? '': item.variant.title}</div>
                           </div>
                           
                           <div>
                                <div>£{item.variant.price}</div>
                           </div>
                           <div>
                                <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity}/>
                           </div>
                           <div>
                                <div>£{(item.quantity * item.variant.price).toFixed(2)}</div>
                           </div>
                           <div>
                               <RemoveLineItem lineItemId={item.id}/>
                           </div>
                       </CartItemStyled>
                   ))}
                   <CartFooterStyled>
                       <div>
                       <strong>Total:</strong>
                       </div>
                       <div>
                       <span>£{checkout?.totalPrice}</span>
                       </div>
                   </CartFooterStyled>
                
                {!checkout?.lineItems && (
                    <h4>Nothing in the cart</h4>
                )}

                   <FooterCheckoutStyled>
                        <div>
                            <Button onClick={()=>navigate(-1)}>Continue Shopping</Button>
                        </div>
                        <div>
               {!!checkout?.webUrl && (
                            <Button checkoutButt onClick={()=>window.location.href = checkout.webUrl}>
                                Checkout
                            </Button>
               )}

               </div>
                   </FooterCheckoutStyled>
                   
            </div>
            
        </sectionStyled>
    )
}

