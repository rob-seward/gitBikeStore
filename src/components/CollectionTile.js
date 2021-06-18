import React from 'react';

export function CollectionTile({description, title, backgroundImage}){
    console.log(title, description);
    return (
        <div>
            <h1>{title}</h1>
            <p> {description}</p>
        </div>
    );
}