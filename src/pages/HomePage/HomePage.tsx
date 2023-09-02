import { assets } from "assets/assets";
import { Button } from "customStyles/Button";
import { AccentSpan } from "customStyles/Typography";
import { BgPatternWrapper } from "customStyles/bgPattern";
import React from "react";
import styled from "styled-components";
import { AiFillCheckCircle } from "react-icons/ai";
import WelcomeSection from "./sections/WelcomeSection";
import IntroductionSection from "./sections/IntroductionSection";
import FeaturesSection from "./sections/FeaturesSection";
import TimeLineSection from "./sections/TimeLineSection";
import TeamSection from "./sections/TeamSection";
import StatsSection from "./sections/StatsSection";
import BlogSection from "./sections/BlogSection";
import QuestionsSection from "./sections/QuestionsSection";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <WelcomeSection />
      <IntroductionSection />
      <FeaturesSection />
      <TimeLineSection />
      <TeamSection />
      {/* <StatsSection /> */}
      {/* <BlogSection /> */}
      {/* <QuestionsSection /> */}
    </HomePageWrapper>
  );
};

const HomePageWrapper = styled.main``;

export default HomePage;
