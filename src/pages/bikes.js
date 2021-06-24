import React from 'react';
import ProductContext from '../context/product-context';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import {StyledLink} from '../components/StyledLink';
import { Link } from "gatsby";



const BmxContainerStyled = styled.div`
display: grid;

@media(min-width: 370px) {
grid-template-columns: 1fr;
align-content: center;
}

@media(min-width: 500px) {
grid-template-columns: 1fr 1fr;
}

@media(min-width: 728px) {
grid-template-columns: 1fr 1fr 1fr;
}

@media(min-width: 1028px) {
grid-template-columns: 1fr 1fr 1fr 1fr;
}

`;

const BmxBikesGridStyled = styled.div`
display: grid;
grid-template-rows: 1fr auto auto;
color:green;
grid-gap: 20px;
width: 300px;

`;

const BmxBikeTiledStyled = styled.div`
display: grid;
grid-template-rows: 1fr;
margin: 20px;

.variantGrid {
  display: flex;
  flex-grow: 1;
}

.bmxDetails {
  display: grid;
  line-height: .5px;
}

.detailsLink {
  >${StyledLink} {
  border: 1px solid black;
  padding: 5px;
  display: block;
  text-align: center;
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
    background-color: black;
  }
}
}


`;





function BmxBikeTile({bmx}) {
  console.log(bmx);
  const mainImage = getImage(bmx.images[0]);
  
  return (
    
    <BmxBikeTiledStyled>

          <div>
              <GatsbyImage image={mainImage} alt='arse'/>
          </div>

        <div className="bmxDetails">
            <div>
              <h2>{bmx.title}</h2>
            </div>
        </div>

        <div>
          <p>£{parseFloat(bmx.priceRangeV2.minVariantPrice.amount).toFixed(1)}</p>
        </div>
          <div className='variantGrid'>
                {bmx?.variants?.map(v => (
                  <p >{ v.title === 'Default Title'? '': v.title + '/' }</p>
                ))}
          </div>
          <div className="detailsLink">
            <StyledLink to={`/products/${bmx.handle}`}>view</StyledLink>
          </div>
          
         
          
    </BmxBikeTiledStyled>
      
    
    
  );
};


export default function BikesPage({bmx}) {
  //use the product context to access collections
  const {collections} = React.useContext(ProductContext);
  
  //filter on bikes
  const bikes = collections.find(bike => bike.title === 'Bikes');
  const {products: bmxBikes} = bikes;
  
  
  
  return (
    <>
      
      <BmxContainerStyled>
      {bmxBikes.map(bmx => (
        
          <BmxBikeTile key={bmx.id} bmx={bmx} />
          
        ))}
      </BmxContainerStyled>
      </>
        
    
  );
  
};
