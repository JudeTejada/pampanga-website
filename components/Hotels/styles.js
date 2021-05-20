import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  padding: 4rem 3rem;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Content = styled.div`

@media only screen and (min-width: 768px) {
  padding: 0 2rem;
  }

`;

export const ImageStyled = styled.div`
  min-height: 300px;

  width: 100%;
  position: relative;
`;
