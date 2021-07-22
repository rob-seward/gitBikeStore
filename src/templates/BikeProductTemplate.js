

import React, {useContext, useEffect, useState} from 'react';
import {graphql} from 'gatsby';
import ImageGallery from '../components/ImageGallery';
import styled from 'styled-components';
import {StoreContext} from '../context/store-context';
import {navigate, useLocation} from '@reach/router';
import queryString from 'query-string';
import { ProductQuantityAdder } from '../components/ProductQuantityAdder';
import { Button } from '../components/Button';



const Price = styled.div`
margin: 1em;
font-weight: bold;
font-size: 2em; 


`;

const VariantsStyled = styled.div`
display: grid;
grid-gap: .5em;

margin: 3em 0em;

>select{
    padding: .5em;
    width: 30%;
    cursor: pointer;
}

@media (min-width: 768px){
text-align: left;
}
`;


const BikeProductTemplateStyled = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 1em;
        

        @media(min-width: 768px){
            grid-template-columns: 1fr 1fr;
            grid-gap: 10px;

            >div:first-child{
                order: 2;
                
                display: grid;
                
                >div:first-child {
                    text-align: center;

                    >p:first-child{
                        font-size: 1.5rem;
                    }
                    >p:last-child {
                        text-align: left;
                    }
                }
            
            }

            >div:last-child{
                order: 1;
            }
        }

`;


export const query = graphql`
    query productQuery($shopifyId: String){
        shopifyProduct(shopifyId: {eq: $shopifyId}){
        ...ShopifyProductFields
    }
    }
`;



export default function BikeProductTemplate(props){
    
    //In this order
    //1. I got the product from shopify by the handle
  const { getProductById } = React.useContext(StoreContext);
  
  // 2. poped the returned product into state
  const [product, setProduct] = React.useState(null);
  // 3. get the selectedVaraint from the event listener and set it to state
  const [selectedVariant, setSelectedVariant] = React.useState(null);
  //4. this uses reach/router plugin to get stuff from URL's
  const {search, origin, pathname} = useLocation();
  
  //5. use this for stripping the URL to get variantid using it as matcher to get selected variant
  const variantId = queryString.parse(search).variant;
 

  
//Managed to get the whole product from shopify and into graphmodel with .handle 
  React.useEffect(() => {
    getProductById(props.data.shopifyProduct.handle).then((result) => {
        setProduct(result);
        setSelectedVariant(result.variants.find(v=>v.id === variantId)||result.variants[0]);
        
               
    });

},[getProductById, props.data.shopifyProduct, setProduct, variantId]);



// tried everything to get dynamic pull from shopify using .shopifyId ended up with object Object
 /*React.useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then((result) => {
        console.log(result);
               
    });

},[getProductById, props.data.shopifyProduct]);*/

///this gets the selected single selected variant
const handleVariantChange = (e) => {
    /* refaitorde for new variant: setSelectedVariant(product?.variants.find(variant => variant.id === e.target.value));
    console.log(selectedVariant);*/
    const newVariant = product?.variants.find(variant => variant.id === e.target.value);
    setSelectedVariant(newVariant);

    
//which then takes the product url and creates and additioanl bit with the variants id and sets the
//browser history with replace true option - 
    navigate(`${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,{replace: true});

}



   return (
    <>
    <Button onClick={()=>navigate(-1)}>Back to products</Button>

        <BikeProductTemplateStyled>
            <div>
                <div>
                <span>{props.data.shopifyProduct.title}</span>
                <span>{props.data.shopifyProduct.description}</span>
                
                {product?.availableForSale && !!selectedVariant && (
                <>
                        {product?.variants.length > 1 && (
                        <VariantsStyled>
                        <strong>selection</strong>
                        <select value={selectedVariant.id} onChange={handleVariantChange}>
                            {product?.variants.map((variant)=>{
                                
                                return (
                                        <option 
                                        value={variant.id}
                                        key={variant.id}>
                                            {variant.title}
                                            </option> 
                                        )
                                    }
                                )}
                        </select>
                        </VariantsStyled>
                        )}
                        {!! selectedVariant &&
                            <>
                                <Price>£{selectedVariant.price}</Price>
                                
                                <ProductQuantityAdder variantId={selectedVariant?.id} available={selectedVariant?.available}/>
                            </>
                        }
                </>
                )
            }
           
                </div>
            </div>
            
            <div>
           
                <ImageGallery   selectedVariantImageId={selectedVariant?.image.src} key={props.data.shopifyProduct.id} id={props.data.shopifyProduct.id} title={props.data.shopifyProduct.title} images={props.data.shopifyProduct.images} />
                
            </div>
            
        </BikeProductTemplateStyled>
        </>
       
       );
};




