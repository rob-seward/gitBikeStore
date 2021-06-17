import React, { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import StoreContext from 'context/store-context';
import styled from 'styled-components';
import {StyledLink} from './StyledLink';

//need to sort styling
const CartWrapperStyled = styled(StyledLink).attrs(()=>({
    to:'/cart',
}))`
    

display: flex;


>div:last-child {
    padding-left: .5em;
    
}
`;

export function Cart() {
    const {checkout} = useContext(StoreContext);
    console.log(checkout, 'on the cart')
    let totalQuantity = 0;
    checkout.lineItems.forEach(lineItem => {
        totalQuantity = totalQuantity + lineItem.quantity;
    })
        
    
    return (
        <CartWrapperStyled>
            <FaShoppingCart size="1.5em"/>
            <div>
             {totalQuantity} item(s) / £{checkout?.totalPrice || '0.00'}
            </div>
                </CartWrapperStyled>
    )
}