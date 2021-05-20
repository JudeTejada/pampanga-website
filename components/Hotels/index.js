import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import { Title, Paragraph } from "../reusables";
import { Container, ImageStyled, Content } from "./styles";

const Hotels = ({ title, description, list }) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <Paragraph style={{ width: "100%" }}>{description}</Paragraph>
      </Content>

      <Carousel>
        {list.map((image) => (
          <ImageStyled key={image}>
            <Image src={image} layout="fill" />
          </ImageStyled>
        ))}
      </Carousel>
    </Container>
  );
};

export default Hotels;
