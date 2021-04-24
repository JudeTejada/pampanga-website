import React from "react";
import Image from "next/image";

import ImageLoader from "../ImageLoader";

import {
  HeaderContainer,
  HeaderTitle,
  HeaderSubTitle,
  HeaderContent,
  ButtonPrimary,
  HeaderImage,
} from "./headerStyles";

const Header = (props) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderSubTitle>Explore</HeaderSubTitle>
        <HeaderTitle>Pangasinan</HeaderTitle>
        <ButtonPrimary>Learn More</ButtonPrimary>
      </HeaderContent>
      <HeaderImage>
        <Image
          loader={ImageLoader}
          alt="Picture of Pangasinan"
          src="/header.jpg"
          layout="fill"
        />
      </HeaderImage>
    </HeaderContainer>
  );
};

export default Header;
