import React from 'react';
import styled from 'styled-components';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import Nav from './Nav';
import Logo from './Logo.js'
import Cart from './Cart';





const HeaderStyled = styled.div`
  background-color: white;
  display: grid;
  grid-gap: 0rem;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1em  #ebe9eb;
  align-self: start;
 
  @media(max-width: 370px){
    >div{
      grid-column: 2;
    }
  }

  @media(min-width: 371px){
    >div{
      grid-column: 1;
      align-self: start;
      padding-right: .4em;
    }
  }
  
  @media(min-width: 371px){
    >div {
      grid-column: 1;
      padding-right: .4em;
    }
  }


`;

export default function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <Nav />
      <Cart />
    </HeaderStyled>
  );
}
