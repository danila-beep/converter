import React from "react";
import styled, { keyframes } from "styled-components";

export const Preloader = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.4);
`;

const spin = keyframes`
      0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: #000;
  animation: ${spin} 1s infinite linear;
`;
