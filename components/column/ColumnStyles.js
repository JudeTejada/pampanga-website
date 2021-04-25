import styled, { css } from "styled-components";

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 3.5rem 0;

  @media only screen and (min-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  }
`;

export const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 3rem;
  padding: 0 3rem;

  @media only screen and (min-width: 768px) {
    padding-right: 3rem;
    ${({ reverse }) =>
      reverse
        ? css`
            padding-left: 3rem;
          `
        : css`
            padding-right: 3rem;
          `}
    justify-content: center;
  }
`;

export const ColumnTitle = styled.h2`
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
`;

export const ImageContainer = styled.div`
margin-top:3rem;
  position: relative;
  height: 400px;
  width: 100%;
`;
