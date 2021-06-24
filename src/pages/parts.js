import React from 'react';
import ProductContext from '../context/product-context';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import {StyledLink} from '../components/StyledLink';
import { Link } from "gatsby";


const PartsContainerStyled = styled.div`
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

const PartTiledStyled = styled.div`
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
}`;

function PartTile({part}){
  return (
    <PartTiledStyled>
    <div>
      <GatsbyImage alt="eerrr" image={getImage(part.images[0])}/>
    </div>
    <div>{part.title}</div>
    <div>£{parseFloat(part.priceRangeV2.minVariantPrice.amount).toFixed(1)}</div>
    <div class>
        {part.variants.map(v => (
            <p>{v.title === 'Default Title' ? '':v.title}</p>
      ))}
    </div>
      <div className="detailsLink">
            <StyledLink to={`/products/${part.handle}`}>view</StyledLink>
          </div>

    </PartTiledStyled>
  )
}


export default function PartsPage() {
  const { collections } = React.useContext(ProductContext);
const {products: parts} = collections.find(part => part.title === 'Parts');
console.log(parts);
  
  return (
    <PartsContainerStyled>
      {parts.map(part => (
        <PartTile key={part.id} part={part} />
      ))}
    </PartsContainerStyled>
  );
}
