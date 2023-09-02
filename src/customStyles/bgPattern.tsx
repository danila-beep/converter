import React from "react";
import styled from "styled-components";

const BgPattern1 = styled.div`
  position: absolute;
  left: -5%;
  bottom: 0;
  background: var(--bg-color-light);
  width: 20rem;
  height: 20rem;
  transform: rotate(40deg);
  z-index: var(--z-index-bg-pattern)
`;
const BgPattern2 = styled.div`
  position: absolute;
  left: 10%;
  top: 10%;
  background: var(--bg-color-light);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  z-index: var(--z-index-bg-pattern)
`;
const BgPattern3 = styled.div`
  position: absolute;
  right: 25%;
  top: -10%;
  background: var(--bg-color-light);
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  z-index: var(--z-index-bg-pattern)
`;
const BgPattern4 = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background: var(--bg-color-light);
  width: 15rem;
  height: 30rem;
  transform: rotate(-40deg);
  z-index: var(--z-index-bg-pattern)
`;
const BgPattern5 = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  background: var(--bg-color-light);
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  z-index: var(--z-index-bg-pattern)
`;

export const BgPattern = {
  BgPattern1,
  BgPattern2,
  BgPattern3,
  BgPattern4,
  BgPattern5,
};

export const BgPatternWrapper = () => {
  return (
    <React.Fragment>
      <BgPattern.BgPattern1 />
      <BgPattern.BgPattern2 />
      <BgPattern.BgPattern3 />
      <BgPattern.BgPattern4 />
      <BgPattern.BgPattern5 />
    </React.Fragment>
  );
};
