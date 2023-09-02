import { assets } from "assets/assets";
import { Button } from "customStyles/Button";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo src={assets.logos.logo} alt="" />
      <div style={{
        display: "flex",
        gap: "3rem",
        alignItems: "center"
      }}>
        <HeaderNavigation>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Instruments</li>
          </ul>
        </HeaderNavigation>
        <Button>Sign In</Button>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 70%;
  height: 5rem;

  z-index: var(--z-index-header);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.img`
  width: 15rem;
  height: auto;
`;

const HeaderNavigation = styled.nav`
  & ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    font-weight: 600;
  }
  & ul li {
    transition: 0.5s;
    cursor: pointer;
  }
  & ul li:hover {
    color: var(--typography-color-accent);
    border-bottom: 0.2rem solid var(--typography-color-accent);
    margin-bottom: -0.2rem;
  }
`;

export default Header;
