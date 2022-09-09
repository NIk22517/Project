import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <div className='logo'>
        <NavLink to='/'>LOGO</NavLink>
      </div>
      <ul className='links'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/privacy-policy'>Privacy policy</NavLink>
      </ul>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #a66cff;
  padding: 0 1rem;

  .links {
    display: flex;
    justify-content: space-evenly;
    padding: 0 1rem;
  }
   a {
    padding: 0 1rem;
    color: white;
    font-size: medium;
    font-weight: bolder;
  }
  a .active {
    color: black;
  }
`;
