import React from 'react';
import styled from 'styled-components';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import {StyledLink} from './StyledLink';

const CollectionLinkStyled = styled(StyledLink).attrs(()=>({
    to:'/bikes',
  }))`
  color: white;
  text-decoration: none;
  
  }
  
  `;


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
border: ${props =>props.sale?"1px solid white; text-align: center; padding 30px;":"none; text-align: center; "};
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
         <CollectionLinkStyled>
            <TitleStyled sale={sale}>{title}</TitleStyled>
            <p > {description}</p>
            </CollectionLinkStyled>
            
            
        </BackgroundImage>
            
        </CollectionTileStyled>
    );
}