import React from "react";

import {
  Container,
  MainTitle,
  Paragraph,
  ContentContainer,
} from "./videoIntroStyles";

import YoutubeEmbed from "../youtubeEmbed";

const VideIntro = (props) => {
  return (
    <Container>
      <ContentContainer>
        <MainTitle>A glimpse of Pampanga</MainTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magnam
          consectetur iste repellendus asperiores. Asperiores pariatur esse
          aspernatur voluptatem exercitationem consequatur officia ipsa saepe,
          accusantium, numquam et perspiciatis, commodi quidem?
        </Paragraph>
      </ContentContainer>




      <YoutubeEmbed embedId="UNoB-GmBgr4" />
      <br /> 
      <br /> 
      <YoutubeEmbed embedId="PmJvd1zibLY" />
    </Container>
  );
};

export default VideIntro;
