import { assets } from "assets/assets";
import { AccentSpan } from "customStyles/Typography";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";

const IntroductionSection = () => {
  return (
    <IntroductionSectionWrapper>
      <div>
        <h4>
          <AccentSpan>What is CryptoBeep?</AccentSpan>
        </h4>
        <h1>How it Works</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
          soluta est laboriosam dolorum reprehenderit animi.
        </p>
      </div>
      <div>
        <img src={assets.images.buyTech} alt="" width={450} />
        <div>
          <h2>
            We`v built this platform to tell you everything about
            crypto-industry
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum,
            voluptatibus? Eveniet corporis eaque ab ut. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Harum, voluptatibus? Eveniet
            corporis eaque ab ut.
          </p>
          <ul>
            <li>
              <AiFillCheckCircle /> Lorem ipsum dolor sit amet.
            </li>
            <li>
              <AiFillCheckCircle /> Lorem ipsum dolor sit amet.
            </li>
            <li>
              <AiFillCheckCircle /> Lorem ipsum dolor sit amet.
            </li>
          </ul>
        </div>
      </div>
    </IntroductionSectionWrapper>
  );
};

const IntroductionSectionWrapper = styled.section`
  padding: 0 15%;
  display: flex;
  background: var(--bg-color-dark);
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  gap: 5rem;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;

    & img {
      transform: scale(1.3) rotate(-30deg) translateX(-2rem);
    }

    & > div {
      position: relative;
      z-index: var(--z-index-content);
      display: flex;
      flex-direction: column;
      gap: 2rem;

      & > ul {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style: none;

        & > li {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
      }
    }
  }
`;

export default IntroductionSection;
