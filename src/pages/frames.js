import React from 'react';
import ProductContext from '../context/product-context';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from 'styled-components';
import {StyledLink} from '../components/StyledLink';
import { Link } from "gatsby";


const FrameContainerStyled = styled.div`
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

const FrameTiledStyled = styled.div`
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


function FrameTile({frame}) {
return (
  <FrameTiledStyled>
  <div>
    <GatsbyImage alt="something" image={getImage(frame.images[0])}/>
  </div>
  <div>
  <h2>{frame.title}</h2>
  <p>£{parseFloat(frame.priceRangeV2.minVariantPrice.amount).toFixed(1)}</p>
  </div>
  <div className="variantGrid">
    {frame?.variants.map(v => (
      <p>{v.title === "Default Title"? '': 'v.title'}</p>
    ))}

  </div>
  
  <div className="detailsLink">
            <StyledLink to={`/products/${frame.handle}`}>view</StyledLink>
          </div>
  </FrameTiledStyled>
)
};



export default function FramesPage() {
  const { collections } = React.useContext(ProductContext);
  console.log(collections);

  const {products: frames} = collections.find( frame => frame.title === 'Frames');
  console.log(frames);

  return (
    <FrameContainerStyled>
      {frames.map(frame => (
        <FrameTile key={frame.id} frame={frame} />
      ))}
    </FrameContainerStyled>
  );
}
