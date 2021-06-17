import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
  padding-top: 1rem;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <p>&copy; Git Bikes {new Date().getFullYear}</p>
    </FooterStyled>
  );
}
