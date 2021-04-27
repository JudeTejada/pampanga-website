import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 10rem 3rem;
  display: grid;
  justify-items: center;

  width: 100%;
  height: 100%;
  margin: 5rem 0;
`;

export const AboutTitle = styled.h2`
  font-size: 4.5rem;
  font-family: inherit;
  font-weight: 700;
  color: #000;
  margin-bottom: 2rem;
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
  text-align:justify;
  width:120ch;
  margin-bottom:16px;
  @media only screen and (min-width: 600px) {
    text-align:center;
  }
  
`;
