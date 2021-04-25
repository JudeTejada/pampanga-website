import React from "react";

import { AboutContainer, AboutTitle, Paragraph } from "./AboutStyles";

const About = (props) => {
  return (
    <AboutContainer>
      <AboutTitle>The Wonders of Pampanga</AboutTitle>
      <Paragraph>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,{" "}
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
