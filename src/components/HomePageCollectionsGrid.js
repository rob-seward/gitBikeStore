import React from 'React';
import {CollectionTile} from './CollectionTile';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components';


const HomePageTilesStyled = styled.div`
display: grid;

`;

export function HomePageCollectionsGrid({collections}) {
    
    
    return (
        <HomePageTilesStyled> 
            {collections.map(collection => (
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