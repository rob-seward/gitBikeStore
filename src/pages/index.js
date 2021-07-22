import React from 'react';
import styled from 'styled-components';
import whip from '../assets/images/whip.jpg';
import {HomePageHero} from '../components/HomePageHero';
import { StaticImage } from "gatsby-plugin-image";
import { HomePageCollectionsGrid } from '../components/HomePageCollectionsGrid';
import ProductContext from '../context/product-context';
import SEO from '../components/SEO';
import {StyledLink} from '../components/StyledLink';

const CtaStyled = styled(StyledLink).attrs(()=>({
  to:'/bikes',
}))`
color: black;
text-decoration: none;

`;


const HeroContainerStyled = styled.div`
  display: grid;
  
  .hero {
    grid-area: hero;
    height: 200px;
    background: #6dd5ed url(${whip});
    background-size: cover;
    padding: 50px;
    align-items: start;
    justify-content: center;
  
  }

  

  .cta {
    display: grid;
    align-items: center;
    justify-items: center;
    align-content: center;
  }

  .cta1 {
    background: linear-gradient(to right, #7693A9, #A6BAC0);
    grid-area: cta1;
    margin: 5px 0px;
   
  }

  .cta2 {
    grid-area: cta2;
    background: linear-gradient(to right, #CCD5BF, #FCF3E2);
    margin: 5px 0px;
    
  }



  @media (max-width: 500px) {
    grid-template-areas:
      'hero'
      'cta1'
      'cta2';

      .cta2 {
        margin-top: 0px;
      }
     

  }

  @media(min-width: 501px) {
    margin-bottom: 5px;
    grid-template-areas:
      'hero cta2'
      'hero cta1';

   

      .cta2 {
    background: linear-gradient(to bottom left, #7693A9, #A6BAC0);
    grid-area: cta2;
    margin: 0px 0px;
    padding-left: 15px;
    padding-right: 15px;
    h2 {
      border: 1px black solid;
      padding: 20px;
    }
    
   
  }

  .cta1 {
    grid-area: cta1;
    background: linear-gradient(to right, #CCD5BF, #FCF3E2);
    margin: 0px 0px;
    grid-column: span 2;
    h2 {
      color: white;
      border: 1px white solid;
      padding: 10px;
    }
    
    }
  }




  @media(min-width: 700px) {
    grid-template-areas:
      'hero cta2'
      'hero cta1';

      .cta1 {
        h2 {
          color: white;
      border: 1px white solid;
      padding: 20px;
    }
      }
  }
  
  
`;

export default function HomePage() {
const {collections} = React.useContext(ProductContext);


  return (
    <>
    <SEO title="Home"/>
    <div>
    <HeroContainerStyled>
      
      <HomePageHero rotate={90} />
    


      <div className="cta cta1">
      <CtaStyled>
        <h2>CHECKOUT OUR BIKES</h2>
      </CtaStyled>
        
      </div>

      <div className="cta cta2">
        <h2>HOOKED UP TO SHOPIFY</h2>
      </div>
    </HeroContainerStyled>
    
       <HomePageCollectionsGrid collections={collections.filter(collection => collection.title !== 'frontpage')}/>
    </div>
    </>
   
    
  );
}
