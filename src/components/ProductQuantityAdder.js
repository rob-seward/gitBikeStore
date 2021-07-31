import React,{useState}from 'react';
import styled from 'styled-components';

import {Button} from '../components/Button';
import StoreContext from 'context/store-context';


const ProductQuantityAdderStyled = styled.div`
margin-top: 20px;
margin-bottom: 20px;
padding: .5em;
>strong {
    display: block;
    margin-bottom: 10px;
}

>form {
    display: flex;
}
`;

const Input = styled.input`
    border: 1px sold #ccc;
    display: block;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    border-radius: 0;
    padding: 5px 10px;
    height:44px;
    box-sizing: border-box;
    min-width: 0;
    &:focus {
        border-color: black;
    }
`;



export function ProductQuantityAdder({variantId, available}) {
    const [quantity, setQuantity]=React.useState(1);
    const {updateLineItem} = React.useContext(StoreContext);
    


    const handleQuantityChange = e => {
        setQuantity(e.currentTarget.value);
    };

    //This is where we can add product to the cart
    //the quantity is a string - we need to change to integer
    const handleSubmit = e => {
        e.preventDefault();
        updateLineItem({variantId, quantity: parseInt(quantity, 10)});
    }

    return (
        
        <ProductQuantityAdderStyled>
            <strong>quantity</strong>
                <form onSubmit={handleSubmit}>
                    <Input disabled={!available} type='number' min="1" step="1" value={quantity} onChange={handleQuantityChange} />
                    <Button  type="submit" disabled={!available} fullWidth>Add to cart</Button>
                </form>
            
        </ProductQuantityAdderStyled>
       
    
    )

}