import styled from 'styled-components';


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
  text-align: justify;
  margin-bottom: 16px;
  @media only screen and (min-width: 600px) {
    text-align: center;
    width: 120ch;
  }
`;
