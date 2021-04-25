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
        <HeaderSubTitle>San Fernando</HeaderSubTitle>
        <HeaderTitle>Pampanga</HeaderTitle>
        <ButtonPrimary>Explore</ButtonPrimary>
      </HeaderContent>
      <HeaderImage>
        <Image
          priority
          alt="Picture of Pangasinan"
          src="/loader-image.jpg"
          layout="fill"
        />
      </HeaderImage>
    </HeaderContainer>
  );
};

export default Header;
