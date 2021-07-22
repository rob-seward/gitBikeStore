import React, {useState} from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';
import {Cart} from '../components/Cart';
import { Button } from '../components/Button';

const NavStyled = styled.nav`
  background: white;
  height: 20px;
  grid-column: 3;
  padding-right: 0px;
  font-size: 0.6em; 
  

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

const MenuButtonStyled= styled.div`
@media(min-width:500px){
  display: hidden;
}
@media(max-width:499px){
  display: block;
  
}

`;

export default function Nav() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
    <MenuButtonStyled>
    <Button onClick={()=>console.log('arse')}>
      <span class="open">☰</span>
      <span class="close">×</span>
      Menu
    </Button>
</MenuButtonStyled>
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
        
        
      </ul>
     
      
      
    </NavStyled>
    </>
  );
}
