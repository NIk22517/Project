import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = ({ setFile }) => {
  const handleClick = () => {
    setFile(null);
  };
  return (
    <Nav>
      <div className='logo'>
        <NavLink to='/'>
          <img
            onClick={handleClick}
            src='https://eci.gov.in/uploads/monthly_2022_06/logo.png.d0e6aee2d64193769bffbc6e720bbe96.png'
            alt='logo'
          />
        </NavLink>
      </div>
      <ul className='links'>
        <NavLink to='/' onClick={handleClick}>
          Home
        </NavLink>
        {/* <NavLink to='/privacy-policy'>Privacy policy</NavLink> */}
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
  background-color: #edf4f2;
  padding: 1rem;

  img {
    width: 298px;
    padding-top: 0.5rem;
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    padding: 0 1rem;
  }
  a {
    padding: 0 1rem;
    color: #393939;
    font-size: large;
  }
  a .active {
    color: black;
  }

  @media (max-width: 676px) {
    padding: 0rem;
    img {
      width: 150px;
    }
    .links {
      padding: 0rem;
    }
  }
`;
