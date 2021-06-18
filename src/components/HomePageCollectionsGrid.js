import React from 'React';
import {CollectionTile} from './CollectionTile';

export function HomePageCollectionsGrid({collections}) {
    return (
        <div> 
            {collections.map(collection => (
                <CollectionTile 
                title={collection.title}
                description={collection.description}
               
                key={collection.shopifyId}
                />
            ))}

        </div>
    );
}