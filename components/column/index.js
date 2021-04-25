import Image from "next/image";
import React from "react";

import {
  ColumnContainer,
  ColumnTitle,
  Paragraph,
  ImageContainer,
  ColumnContent,
} from "./ColumnStyles";

const Column = ({ reverse }) => {
  return (
    <ColumnContainer reverse={reverse}>
      <ColumnContent reverse={reverse}>
        <ColumnTitle>Title Goes here</ColumnTitle>
        <Paragraph>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </Paragraph>
      </ColumnContent>

      <ImageContainer>
        <Image src="/loader-image.jpg" alt="Picture of a place" layout="fill" />
      </ImageContainer>
    </ColumnContainer>
  );
};

Column.propTypes = {};

export default Column;
