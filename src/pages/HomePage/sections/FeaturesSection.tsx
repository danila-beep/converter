import { assets } from "assets/assets";
import { AccentSpan } from "customStyles/Typography";
import React from "react";
import styled from "styled-components";

const FeaturesSection = () => {
  return (
    <FeaturesSectionWrapper>
      <div>
        <h4>
          <AccentSpan>CryptoBeep features</AccentSpan>
        </h4>
        <h1>Best Features</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ratione accusantium fugiat at exercitationem aliquid cum nulla sit
          dicta dolorem.
        </p>
      </div>
      <ul>
        <li>
          <img src={assets.logos.securityLogo} alt="" width={60} />
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            doloremque id quo, cupiditate nostrum ea!
          </p>
        </li>
        <li>
          <img src={assets.logos.giftLogo} alt="" width={60} />
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            doloremque id quo, cupiditate nostrum ea!
          </p>
        </li>
        <li>
          <img src={assets.logos.accessLogo} alt="" width={60} />
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            doloremque id quo, cupiditate nostrum ea!
          </p>
        </li>
        <li>
          <img src={assets.logos.storageLogo} alt="" width={60} />
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            doloremque id quo, cupiditate nostrum ea!
          </p>
        </li>
        <li>
          <img src={assets.logos.moneyLogo} alt="" width={60} />
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            doloremque id quo, cupiditate nostrum ea!
          </p>
        </li>
        <li>
          <img src={assets.logos.graphLogo} alt="" width={60} />
          <h4>Lorem Ipsum</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            doloremque id quo, cupiditate nostrum ea!
          </p>
        </li>
      </ul>
    </FeaturesSectionWrapper>
  );
};

const FeaturesSectionWrapper = styled.section`
  padding: 0 15%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    & > p { 
        text-align: center;
        width: 60%;
    }
  }

  & > ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
  }
`;

export default FeaturesSection;
