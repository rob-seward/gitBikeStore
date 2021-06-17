import React from 'react';
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa';
import StoreContext from '../context/store-context';


const Icon = styled.div`
cursor: pointer;
&:hover {
    color: red;
}
`;


export function RemoveLineItem({ lineItemId }) {
    const { removeLineItem } = React.useContext(StoreContext);

    const handleClick= () => {
        removeLineItem(lineItemId);
    }
    

    return (
        <Icon onClick={handleClick}>
            <FaTrashAlt />
            </Icon>
    )
}