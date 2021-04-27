import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import Carousel from "react-elastic-carousel";

import {
  ImageContainer,
  MainContainer,
  Title,
  Paragraph,
  Content,
} from "./CarouselStyles";

const ImageCarousel = (props) => {
  const breakpoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 550, itemsToShow: 1, itemsToScroll: 1, pagination: false },
    { width: 850, itemsToShow: 3, pagination: false },
    { width: 1150, itemsToShow: 3.2, itemsToScroll: 3.2, pagination: false },
    { width: 1450, itemsToShow: 3.2, itemsToScroll: 3.2, pagination: false },
    { width: 1750, itemsToShow: 3.2, itemsToScroll: 3.2, pagination: false },
  ];

  return (
    <MainContainer>
      <Content>
        <Title>The Good ol places 🌟</Title>
        <Paragraph>
          Lies the pictures of The Place San Fernando Pampanga where you can see
          some snapshot of the place
        </Paragraph>
      </Content>
      <Carousel
        breakPoints={breakpoints}
        itemPadding={[0, 20]}
        itemsToScroll={3.5}
        itemsToShow={3.5}
      >
        <ImageContainer>
          <Image src="/3pic.jpg" layout="fill" />
        </ImageContainer>
        <ImageContainer>
          <Image src="/4pic.jpg" layout="fill" />
        </ImageContainer>
        <ImageContainer>
          <Image src="/5pic.jpg" layout="fill" />
        </ImageContainer>
        <ImageContainer>
          <Image src="/6pic.jpg" layout="fill" />
        </ImageContainer>

        <ImageContainer>
          <Image src="/7pic.png" layout="fill" />
        </ImageContainer>

        <ImageContainer>
          <Image src="/8pic.jpg" layout="fill" />
        </ImageContainer>

        <ImageContainer>
          <Image src="/9pic.jpeg" layout="fill" />
        </ImageContainer>

        <ImageContainer>
          <Image src="/10pic.jpg" layout="fill" />
        </ImageContainer>
      </Carousel>
    </MainContainer>
  );
};

{
}

export default ImageCarousel;
