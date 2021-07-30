import React, {useState} from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';
import {Cart} from '../components/Cart';
import { Button } from '../components/Button';
import MobileNav from './MobileNav';



const NavStyled = styled.nav`
  background: white;
  height: 20px;
  grid-column: 2;
  padding-right: 0px;
  font-size: 0.6em;
  grid-row: 1;
  

  ul {
    display: grid;
    grid-auto-flow: column;
    list-style: none;
    gap: 1rem;
    justify-items: end;
    align-items: start;

    
  }

  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media(max-width: 500px){
   display: none;
   
  }

  

  
`;




export default function Nav() {



  return (
    <>
   
    <MobileNav />
    
    <NavStyled className="menu">

      <ul id="menu-list">
      
        <li className="menu bike-nav">
          <Link to="/bikes/">BIKES</Link>
        </li>

        <li className="menu frames-nav">
          <Link to="/frames/">FRAMES</Link>
        </li>
        <li className="menu parts-nav">
          <Link to="/parts/">PARTS</Link>
        </li>
        <li className="menu shop-nav">
          <Link to="/contact/">CONTACT</Link>
        </li>
        
        
      </ul>
     
    </NavStyled>
    </>
  );
}
