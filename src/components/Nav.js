import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {Cart} from '../components/Cart';




const NavStyled = styled.nav`
  background: white;
  height: 100px;
  grid-column: 3;
  padding-right: 20px;
  font-size: 0.6em;
  

  ul {
    display: grid;
    grid-auto-flow: column;
    list-style: none;
    gap: 1rem;
    
  }

  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  

  
`;

export default function Nav() {
  return (
    
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
          <Link to="/products/">SHOP</Link>
        </li>
        <Cart />
      </ul>
     
      
      
    </NavStyled>
  );
}
