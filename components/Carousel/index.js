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

const ImageCarousel = ({ list, title, description }) => {
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
        <Title>{title}</Title>
        {description && <Paragraph>{description}</Paragraph>}
      </Content>
      <Carousel
        breakPoints={breakpoints}
        itemPadding={[0, 20]}
        itemsToScroll={3.5}
        itemsToShow={3.5}
      >
        {list.map((image) => (
          <ImageContainer>
            <Image src={image} layout="fill" key={image} />
          </ImageContainer>
        ))}
      </Carousel>
    </MainContainer>
  );
};

{
}

export default ImageCarousel;
