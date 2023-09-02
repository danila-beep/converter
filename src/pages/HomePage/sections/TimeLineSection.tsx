import { AccentSpan } from "customStyles/Typography";
import React from "react";
import styled from "styled-components";

const TimeLineSection = () => {
  return (
    <TimeLineSectionWrapper>
      <div>
        <h4>
          <AccentSpan>RoadMap</AccentSpan>
        </h4>
        <h1>The TimeLine</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          voluptatum sapiente aperiam eveniet quo id.
        </p>
      </div>
      <TimeLine>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </TimeLine>
    </TimeLineSectionWrapper>
  );
};

const TimeLine = styled.div`
    position: relative;
    width: 100vw;
    height: 50dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &::before {
        content: "";
        width: 80%;
        border-bottom: .3rem solid var(--activity-element-color)
    }

    & > div {
        position: absolute;
        display: flex;
        justify-content: center;
        top: 50%;
        width: 2rem;
        height: 2rem;
        background: var(--typography-color-accent);
        border-radius: 50%;
        transform: translate(-50%, -50%)
    }

    & > div:nth-child(1) {
        left: 20%;
    }
    & > div:nth-child(2) {
        left: 40%;
    }
    & > div:nth-child(3) {
        left: 60%;
    }
    & > div:nth-child(4) {
        left: 80%;
    }
`

const TimeLineSectionWrapper = styled.section`
  padding: 0 15%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > p {
        text-align: center;
    }
  }
`;

export default TimeLineSection;
