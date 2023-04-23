import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";

function Header() {
  return (
    <HeaderWrapper>
      <Logo>
        <img src={logo} width="25px" />
      </Logo>
      <User>
        <In>Sign up</In>
        <Up>Sign in</Up>
      </User>
    </HeaderWrapper>
  );
}

export default Header;
const Logo = styled.div``;
const User = styled.div`
  display: flex;
  gap: 1rem;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  @media (max-width: 400px) {
    display: block;
    display: flex;
    justify-content: space-between;
    padding: 4rem 0.5rem 1rem 0.5rem;
  }

  @media (min-width: 401px) {
    display: none;
  }
`;
const In = styled.button`
  border: none;
  padding: 0.2rem 1rem;
  background-color: #1c1d1e;
  color: whitesmoke;
  font-weight: bold;
  cursor: pointer;
`;
const Up = styled.button`
  border: none;
  background-color: #ef5a21;
  font-weight: bold;
  color: whitesmoke;
  border-radius: 5px;
  cursor: pointer;
  padding: 0.2rem 1rem;
`;
