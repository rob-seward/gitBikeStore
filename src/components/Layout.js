import React from 'react';

import 'normalize.css';
import styled from 'styled-components';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';





const SiteBorderStyles = styled.div`
  margin: 1rem 1rem 1rem 1rem;
  /*margin-top: clamp(2rem, 10vw, 12rem);
  background: pink;
  background-size: 2000px;

  padding: clamp(0.5px, 1vw, 10px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);*/
  /* border: 1px solid white;*/
  /* border-radius: 10px;
  @media (max-width: 1100px) {
    margin-left: 0.2rem;
    margin-right: 1.5rem;
  }*/
`;

export default function Layout({ children }) {
  return (
    <>
    
      <GlobalStyles />
      <SiteBorderStyles>
        
          <Header />
          <p>{children}</p>
          <Footer />
       
      </SiteBorderStyles>
    </>
  );
}
