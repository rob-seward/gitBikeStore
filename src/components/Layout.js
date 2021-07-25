import React from 'react';

import 'normalize.css';
import styled from 'styled-components';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';





const SiteBorderStyles = styled.div`
  margin: 1rem 1rem 1rem 1rem;
 
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
