import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <Link to='privacy-policy'>
          <p>Privacy policy</p>
        </Link>

        <p>&copy; Copyright 2022</p>
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer`
  height: 10vh;
  background-color: #edf4f2;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    margin: .5rem 0rem;
  }
`;
