import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShowUploadedImage = ({ file }) => {
  return (
    <>
      <ImageContainer>
        <img src={URL.createObjectURL(file)} alt='profile' />
        <div className='button'>
          <button>
            <Link to='/frame'>Add Frame</Link>
          </button>
        </div>
      </ImageContainer>
    </>
  );
};

export default ShowUploadedImage;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 2rem;

  img {
    height: 50vh;
    object-fit: cover;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }
  .button button {
    background: linear-gradient(40deg, #ff6ec4, #7873f5);
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    border: none;
    padding: 1rem 4rem;
    border-radius: 25px;
    cursor: pointer;
  }
  .button button a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
  }

  @media (max-width: 676px) {
    width: 100vw;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
