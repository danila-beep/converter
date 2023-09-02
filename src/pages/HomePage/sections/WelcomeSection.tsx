import { assets } from "assets/assets";
import { Button } from "customStyles/Button";
import { AccentSpan } from "customStyles/Typography";
import { BgPatternWrapper } from "customStyles/bgPattern";
import React from "react";
import styled from "styled-components";

const WelcomeSection = () => {
  return (
    <WelcomeSectionWrapper>
      <BgPatternWrapper />

      <div>
        <h1>CryptoBeep</h1>
        <h3>
          <AccentSpan>"Learn everything about crypto"</AccentSpan>
        </h3>
        <p style={{ marginBottom: "1rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quod
          et impedit quia. Deleniti nesciunt tenetur a aliquid inventore velit!
        </p>
        <Button>Learn More</Button>
      </div>
      <div>
        <img src={assets.images.welcomeImage} alt="" width={450} />
      </div>
    </WelcomeSectionWrapper>
  );
};

const WelcomeSectionWrapper = styled.section`
  padding: 0 15%;

  display: flex;
  position: relative;
  align-items: center;
  height: 100dvh;
  gap: 3rem;
  & div {

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & img {
    transform: scale(1.5);
    margin-right: -2rem;
  }
`;

export default WelcomeSection;
