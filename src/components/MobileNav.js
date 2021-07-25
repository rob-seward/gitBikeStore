import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import {StyledLink} from './StyledLink';

const MobileNavBikeLinkStyled = styled(StyledLink).attrs(()=>({
    to:'/bikes',
}))`
  text-decoration: none;
  color: black;
  font-size: 0.8em;
`;

const MobileNavFrameLinkStyled = styled(StyledLink).attrs(()=>({
    to:'/frames',
}))`
  text-decoration: none;
  color: black;
  font-size: 0.8em;
`;

const MobileNavPartLinkStyled = styled(StyledLink).attrs(()=>({
    to:'/parts',
}))`
  text-decoration: none;
  color: black;
  font-size: 0.8em;
`;

const MobileNavShopLinkStyled = styled(StyledLink).attrs(()=>({
    to:'/shop',
}))`
  text-decoration: none;
  color: black;
  font-size: 0.8em;
`;


const MenuIcon = styled.button`
position: fixed;
top: 1rem;
right: 2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 1.5rem;
height: 1.5rem;
background: transparent;
border: none;
cursor: pointer;
z-index: 5;


div {
    width: 1.5rem;
    height: 0.20rem;
    background: black;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child{
        transform: ${({nav})=>nav? "rotate(45deg)":"rotate(0deg)"};
    }

    :nth-child(2) {
        opacity: ${({nav})=> nav? "0" : "1"};
    }

    :nth-child(3){
        transform: ${({nav})=>nav? "rotate(-45deg)":"rotate(0deg)"};
    }
}

@media(min-width: 500px){
    display: none;
}
`;

const MenuLinks = styled.nav`

display: flex;
flex-direction: column;
justify-content: right;
align-items: center;
padding-top: 20px;

height: 20vh;
width:35%;
background: transparent;
position: fixed;
top: 50;
right: 0;
z-index: 7;
transition: transform 300ms;
transform: ${({nav}) => (nav? "translateX(0%)" : "translateX(100%)")};
font-size: 1em;

ul {
    list-style: none;
    
}
li {
    padding: 10px;
}

}
@media(min-width: 500px){
    display: none;
}

`;


export default function MobileNav() {

    const [nav, showNav] = React.useState(false);

return (
    <div>
        <MenuIcon nav={nav} onClick={()=>showNav(!nav)}>
            <div />
            <div />
            <div />
        </MenuIcon>
    
    <MenuLinks nav={nav}>
        <ul>
            <li>
                <MobileNavBikeLinkStyled to="/bikes">BIKES</MobileNavBikeLinkStyled>
            </li>
            <li>
                <MobileNavFrameLinkStyled to="/frames">FRAMES</MobileNavFrameLinkStyled>
            </li>
            <li>
                <MobileNavPartLinkStyled to="/parts">PARTS</MobileNavPartLinkStyled>
            </li>
            <li>
                <MobileNavShopLinkStyled to="/shop">SHOP</MobileNavShopLinkStyled>
            </li>
        </ul>
    </MenuLinks>
    </div>
)
    
}