import React from 'react';
import styled from 'styled-components';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import {StyledLink} from './StyledLink';




const HelmetStyled = styled(StyledLink).attrs(()=>({
    to:'/',
}))`
color: black;
grid-area: helmet;
        justify-self: end;

`;

const LogoStyled = styled.div`

  display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-areas:
    "helmet git"
    "bikeco bikeco";

    @media(min-width:371px) {
        justify-self: start;
    }
    
    
    .logo1 {
        grid-area: helmet;
        justify-self: end;
    }

    .logo2 {
        grid-area: git;
        
        
        font-size: 2em;
        font-weight: bold;
        align-self: center;
    }

    .logo3 {
        grid-area: bikeco;
        grid-column: span 2;
        justify-self: end;
        align-self: start;
       
        font-size: 1.2em;
        line-height: .3em;
        margin-bottom: .5em;
        
    }

    
`;

export default function Logo() {
    return (
    
        <LogoStyled>
        <HelmetStyled>
        <div className='logo1'><GiFullMotorcycleHelmet size="2.0em"/></div>
        </HelmetStyled>
        
          
          <div className='logo2'>GIT</div>
          <div className='logo3'>BIKECO.</div>
          
        </LogoStyled>
        
      
    );
};

