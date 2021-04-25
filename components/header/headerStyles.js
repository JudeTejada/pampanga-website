import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100vh;
  display: grid;
  align-items: center;
  width: 100%;
  grid-template-columns: 1fr;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 8rem;
  font-family: inherit;
  font-weight: 700;
  color: #000;
`;

export const HeaderSubTitle = styled.h2`
  font-size: 3.2rem;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;

export const HeaderContent = styled.div`
  padding-left: 3rem;
`;

export const ButtonPrimary = styled.button`
  margin-top: 2.4rem;
  font-size: 1.6rem;
  background: #000;
  color: #fff;
  padding: 1.5rem 2.5rem;
  border: none;
  outline: none;
  transition: 0.2s ease;
  text-transform: uppercase;

  &:hover {
    background: #333;
  }
`;

export const HeaderImage = styled.div`
  position: relative;
  width:100%;
  height:100%;
`;
