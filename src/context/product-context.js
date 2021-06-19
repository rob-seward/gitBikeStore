import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';



//tomorrow we stylin the collections tiles
const query = graphql`
    {
        allShopifyCollection(sort: {fields: title, order: ASC}) {
            edges {
              node {
                title
                description
                image {
                  gatsbyImageData
                }
                products {
                  title
                  shopifyId
                  description
                  images {
                    gatsbyImageData
                  }
                }
              }
            }
          }
    }
`;


const defaultState = {
  products: [],
};

const ProductContext = React.createContext(defaultState);
export default ProductContext;

export function ProductContextProvider({ children }) {
    //this is the bit that wires up the grapghql static query so we can suck it in here awesome!
  const {allShopifyCollection, allShopifyProduct} = useStaticQuery(query);
 
  return (
    <ProductContext.Provider
      value={{
          //maps over the nodes and returns an object for each one
        //products: allShopifyProduct.edges.map(({node})=> node),
        collections: allShopifyCollection.edges.map(({node})=> node),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}