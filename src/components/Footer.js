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

        <p className='copy-right'>&copy; Copyright 2022</p>
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

  p {
    margin: 0.5rem 0rem;
  }
  .copy-right {
    font-size: 10px;
    padding-left: 0.5rem;
  }

  @media (max-width: 676px) {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;
