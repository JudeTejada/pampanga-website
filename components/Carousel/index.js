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
        <Title>Title Goes here</Title>
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Paragraph>
      </Content>
      <Carousel
        breakPoints={breakpoints}
        itemPadding={[0, 20]}
        itemsToScroll={3.5}
        itemsToShow={3.5}
      >
        <ImageContainer>
          <Image src="/loader-image.jpg" layout="fill" />
        </ImageContainer>
        <ImageContainer>
          <Image src="/loader-image.jpg" layout="fill" />
        </ImageContainer>
        <ImageContainer>
          <Image src="/loader-image.jpg" layout="fill" />
        </ImageContainer>
        <ImageContainer>
          <Image src="/loader-image.jpg" layout="fill" />
        </ImageContainer>

        <ImageContainer>
          <Image src="/loader-image.jpg" layout="fill" />
        </ImageContainer>

        <ImageContainer>
          <Image src="/loader-image.jpg" layout="fill" />
        </ImageContainer>

        <ImageContainer>
          <Image src="/loader-image.jpg" layout="fill" />
        </ImageContainer>
      </Carousel>
    </MainContainer>
  );
};

{
}

export default ImageCarousel;
