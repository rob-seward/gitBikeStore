import React from 'react';
import styled from 'styled-components';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import Nav from './Nav';





const HeaderStyled = styled.div`
  background-color: white;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 3px double #ebe9eb;
  justify-items: center;
  h1 {
    place-self: start;
  }
  .logo {
    display: grid;
    grid-auto-flow: column;
    gap: 0.5rem;
    align-items: center;
    @media (max-width: 700px) {
      grid-auto-flow: row;
      line-height: 1.5rem;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <h1>
        <div className="logo">
          <GiFullMotorcycleHelmet />
          GIT BIKECO.
        </div>
      </h1>
      <Nav />
      
      
      
    </HeaderStyled>
  );
}
