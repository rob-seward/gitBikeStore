import React from 'react';
import styled from 'styled-components';

const QuantityAjusterStyled = styled.div`
display: flex;
>div {
    color: green;
    margin: auto;
    padding: 5px 10px;
}
`;

const AdjusterButtonStyled = styled.div`
cursor: pointer;
border: 1px solid black;
font-weight: bold;
`;

export function QuantityAdjuster({item, onAdjust}) {
    const {quantity} = item;

    const handleDecrementQuantity  = ()=> {
        onAdjust({variantId: item.variant.id, quantity: -1 });
    }
    
    const handleIncrementQuantity  = ()=> {
        onAdjust({variantId: item.variant.id, quantity: 1 });
    }


    return (
    <QuantityAjusterStyled>
        <AdjusterButtonStyled  onClick={handleDecrementQuantity}>-</AdjusterButtonStyled>
        <div>{quantity}</div>
        <AdjusterButtonStyled  onClick={handleIncrementQuantity}>+</AdjusterButtonStyled>
    </QuantityAjusterStyled>
    );
};