import {graphql} from 'gatsby';

export const productFields = graphql`
        fragment ShopifyProductFields on ShopifyProduct {
                shopifyId
                handle
                title
                description
                id
                images {
                      gatsbyImageData(width: 300, placeholder: "BLURRED")
                  }
    
  }
`;


