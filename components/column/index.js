import Image from "next/image";
import React from "react";

import {
  ColumnContainer,
  ColumnTitle,
  Paragraph,
  ImageContainer,
  ColumnContent,
} from "./ColumnStyles";

const Column = ({ reverse, photo, title, description }) => {
  return (
    <ColumnContainer reverse={reverse}>
      <ColumnContent reverse={reverse}>
        <ColumnTitle>{title}</ColumnTitle>
        <Paragraph>{description}</Paragraph>
      </ColumnContent>

      <ImageContainer>
        <Image src={photo} alt="Picture of a place" layout="fill" />
      </ImageContainer>
    </ColumnContainer>
  );
};

Column.propTypes = {};

export default Column;
