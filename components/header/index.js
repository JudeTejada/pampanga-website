import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        <Link href="/#about" passHref>
          <ButtonPrimary>Explore</ButtonPrimary>
        </Link>
      </HeaderContent>
      <HeaderImage>
        <Image
          priority
          alt="Picture of Pangasinan"
          src="/header.jpg"
          layout="fill"
        />
      </HeaderImage>
    </HeaderContainer>
  );
};

export default Header;
