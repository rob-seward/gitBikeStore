import React, { useContext } from 'react';
import {FaShoppingCart} from 'react-icons/fa';
import StoreContext from 'context/store-context';
import styled from 'styled-components';
import {StyledLink} from './StyledLink';

//need to sort styling
const CartWrapperStyled = styled(StyledLink).attrs(()=>({
    to:'/cart',
}))`
    
    display: grid;
    grid-auto-flow: column;
    align-items: start;
    font-size: .7em;
    color: black;
    justify-self: end;

    >div:last-child {
        padding-left: .5em;
        padding-top: 0rem;
    }

    @media(max-width: 370px) {
        display: none;
    }

}

    @media(min-width: 371px) {
        grid-column: 3;
        grid-row: 1;
        justify-items: end;
        >div:last-child {
        color: black;
    }

    @media(max-width: 500px) {
        padding-top: 1em;
        grid-column: 3;
        grid-row: 2;
    }

`;

export default function Cart() {
    const {checkout} = useContext(StoreContext);
    
    let totalQuantity = 0;
    checkout.lineItems.forEach(lineItem => {
        totalQuantity = totalQuantity + lineItem.quantity;
    })
        
    
    return (
        <CartWrapperStyled>
            <FaShoppingCart size="1.2em"/>
                <div>
                {totalQuantity} item(s) / £{checkout?.totalPrice || '0.00'}
                </div>
        </CartWrapperStyled>
    )
}