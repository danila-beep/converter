import { AccentSpan } from "customStyles/Typography";
import React, { FC } from "react";
import styled from "styled-components";

const SectionHeading: FC<{
  mainTitle: string;
  subTitle: string;
  description?: string;
}> = ({ mainTitle, subTitle, description }) => {
  return (
    <SectionHeadingStyled>
      <h4>
        <AccentSpan>{subTitle}</AccentSpan>
      </h4>
      <h1>{mainTitle}</h1>
      <p>{description}</p>
    </SectionHeadingStyled>
  );
};

const SectionHeadingStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p {
        text-align: center
    }
`

export default SectionHeading;
