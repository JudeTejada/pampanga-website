import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  background: red;
  width: 100%;
  min-height: 300px;
  &:not(:last-child) {
    padding-right: 2rem;
  }
`;

export const MainContainer = styled.div`
  padding: 10rem 3rem; ;
`;

export const Title = styled.h2`
  font-size: 4.5rem;
  font-family: inherit;
  font-weight: 700;
  color: #000;
  margin-bottom: 2.2rem;
  text-align: center;
  line-height: 100%;

  @media only screen and (min-width: 768px) {
    font-size: 5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #333;
  line-height: 160%;
  margin: 0 auto;
  width: 100%;
  text-align: justify;

  @media only screen and (min-width: 768px) {
    text-align: center;
    width: 80ch;
  }

  @media only screen and (min-width: 1024px) {
    width: 100ch;
  }
`;

export const Content = styled.div`
  margin-bottom: 3.5rem;
`;
