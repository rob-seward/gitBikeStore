import React from 'react';
import styled from 'styled-components';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'



const CollectionTileStyled = styled.div`
height: 300px;
max-height: 100 vh
display: flex;

position: relative;
margin-bottom: 5px;
border: 1px solid black;

>div:first-child {
    flex-grow: 1;
    padding: 100px;
    overflow: hidden;
    color: white;
}

`;



export function CollectionTile({description, title, backgroundImage}){
    
    const image = getImage(backgroundImage);
    const bgImage = convertToBgImage(image);
    return (
        <CollectionTileStyled>
        <BackgroundImage 
            Tag="div"
            {...bgImage}
            preserveStackingContent
         >
             <h1>{title}</h1>
            <p> {description}</p>
            
        </BackgroundImage>
            
        </CollectionTileStyled>
    );
}