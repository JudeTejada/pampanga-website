import React from "react";

import { AboutContainer, AboutTitle, Paragraph } from "./AboutStyles";

const About = (props) => {
  return (
    <AboutContainer id="about">
      <AboutTitle>The Wonders of Pampanga</AboutTitle>
      <Paragraph>
        San Fernando is a Philippines city in Pampanga province, northwest of
        Manila. It’s known for its Giant Lantern Festival, with traditional
        Christmas parol lanterns. The railway station, now a museum, was the end
        point of the WWII Bataan Death March. The Archdiocesan Museum and
        Archives has religious and cultural artifacts. To the northeast, the
        Candaba Wetlands attract rare bird species.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
