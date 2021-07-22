import React from 'React';
import {CollectionTile} from './CollectionTile';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import {Link} from 'gatsby';



const HomePageTilesStyled = styled.div`
display: grid;
cursor: pointer;
overflow: hidden;
margin: 0px;

h2 {
    font-size: 4.5em;
    &:hover {
        color: black;
    }
}

p {
    font-size: 1rem;
}

  
>div:first-child {
height: 300px;
overflow: hidden;

}

@media (min-width: 500px) {
    grid-template-areas:
      'bikes frames'
      'parts sale';

    
      h2 {
        place-self: center;
    font-size: 3em;
    
        }

    p {
    font-size: 0;
    }
    
      >div:first-child {
          height: 200px; 
      }

      div {
        height: 200px;
        overflow: hidden;
        
        }
      
  }
`;



export function HomePageCollectionsGrid({collections}) {
    const saleCollection = collections.find(collection => collection.title === 'Sale');
    
    const remainingCollections  = collections.filter( collection => collection.title !== 'Sale');
    
    return (
    
        
        <HomePageTilesStyled> 
            {!! saleCollection && (
                
                <CollectionTile 
                sale
                title={saleCollection.title}
                description={saleCollection.description}
               backgroundImage={saleCollection.image}
                key={saleCollection.shopifyId}
                />
                
            )}
            {remainingCollections.map(collection => (
                <CollectionTile 
                title={collection.title}
                description={collection.description}
               backgroundImage={collection.image}
                key={collection.shopifyId}
                />
            ))}

        </HomePageTilesStyled>
        
    );
}