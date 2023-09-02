import SectionHeading from "components/SectionHeading";
import { AccentSpan } from "customStyles/Typography";
import React from "react";
import styled from "styled-components";

const TeamSection = () => {
  return (
    <TeamSectionWrapper>
      <SectionHeading
        mainTitle="Our Team"
        subTitle="Meet the team"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, iure."
      />
      <div>

      </div>
    </TeamSectionWrapper>
  );
};

const TeamSectionWrapper = styled.section`
    padding: 0 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5rem;
    min-height: 100dvh;
`;

export default TeamSection;
