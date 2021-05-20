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
      
      </ContentContainer>




      <YoutubeEmbed embedId="UNoB-GmBgr4" />
      <br /> 
      <br /> 
      <YoutubeEmbed embedId="PmJvd1zibLY" />
    </Container>
  );
};

export default VideIntro;
