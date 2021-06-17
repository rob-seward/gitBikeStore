import React from 'react';
import styled from 'styled-components';
import whip from '../assets/images/whip.jpg';

const HeroContainer = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-areas:
    'hero hero cta1'
    'hero hero cta2';

  .hero {
    grid-area: hero;
    height: 200px;
    background: #6dd5ed url(${whip});
    background-size: cover;

    padding: 50px;
    display: flex;
    flex-direction: column;
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
    background: linear-gradient(to right, #2193b0, #6dd5ed);
    grid-area: cta1;
  }

  .cta2 {
    grid-area: cta2;
    background: linear-gradient(to right, #2193b0, #6dd5ed);
  }

  @media (max-width: 700px) {
    grid-template-areas:
      'hero hero'
      'cta1 cta2';
    .cta {
      font-size: 0.5rem;
      padding: 2rem;
    }
  }

  @media (max-width: 500px) {
    grid-template-areas:
      'hero'
      'cta1'
      'cta2';
  }
`;

export default function HomePage() {
  return (
    <HeroContainer>
      <header className="hero" />

      <div className="cta cta1">
        <h2>CHECKOUT THE BIKES SECTION</h2>
      </div>

      <div className="cta cta2">
        <h2>IT'S HOOKED UP TO SHOPIFY</h2>
      </div>
    </HeroContainer>
  );
}
