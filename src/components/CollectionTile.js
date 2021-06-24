import React from 'react';
import styled from 'styled-components';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'


const CollectionTileStyled = styled.div`

max-height: 100 vh
display: flex;
position: relative;

>div:first-child {
    flex-grow: 1;
    padding: 50px;
    overflow: hidden;
    color: white;
    }
`;

const TitleStyled = styled.h2`
border: ${props =>props.sale?"2px solid white; text-align: center; padding 15px;":"none"};
`;


export function CollectionTile({description, title, backgroundImage, sale}){
    
    const image = getImage(backgroundImage);
    const bgImage = convertToBgImage(image);
    return (
        <CollectionTileStyled>
        <BackgroundImage 
            Tag="div"
            {...bgImage}
            preserveStackingContent
         >
            <TitleStyled sale={sale}>{title}</TitleStyled>
            <p > {description}</p>
            
            
        </BackgroundImage>
            
        </CollectionTileStyled>
    );
}