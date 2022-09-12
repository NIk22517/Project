import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShowUploadedImage = ({ file }) => {
  return (
    <>
      <ImageContainer>
        <img src={URL.createObjectURL(file)} alt='profile' />
        <div className='button'>
          <Link to='/frame'>
            <button>Choose Frame</button>
          </Link>
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
  /* padding: 2rem 2rem 1rem 2rem; */
  /* background-image: linear-gradient(
    to left top,
    #ff9933,
    #ff9b79,
    #ffaab5,
    #ffc3e1,
    #fcdcf8,
    #e7dbfd,
    #cfdafc,
    #b9d9f6,
    #62cae6,
    #00b9b9,
    #00a371,
    #138808
  ); */
  border-radius: 20px;

  img {
    height: 50vh;
    object-fit: cover;
    padding: 1rem 0.5rem;
    border-radius: 50px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0rem;
  }
  .button button {
    background-image: linear-gradient(
      to bottom,
      #ff9933,
      #ff9c7c,
      #ffadb9,
      #ffc7e7,
      #ffe2fe,
      #ebe1ff,
      #d5e0ff,
      #bfdffc,
      #68ceea,
      #00bcbc,
      #00a572,
      #138808
    );
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    border: none;
    padding: 1rem 4rem;
    border-radius: 25px;
    cursor: pointer;
    color: #342ead;
    font-weight: bolder;
    font-size: 18px;
    transition: all 0.3s ease-in-out;
  }
  .button a {
    text-decoration: none;
  }

  .button button:hover {
    background-image: linear-gradient(
      to right bottom,
      #ff9933,
      #ff9c7c,
      #ffadb9,
      #ffc7e7,
      #ffe2fe,
      #ebe1ff,
      #d5e0ff,
      #bfdffc,
      #68ceea,
      #00bcbc,
      #00a572,
      #138808
    );
    color: #342ead;
  }

  @media (max-width: 676px) {
    margin: 0rem;
    padding: 2rem 1rem 1rem 1rem;
    margin: 0rem 2rem;
    img {
      width: 100%;
      height: 100%;
      padding: 0rem;
    }
  }
`;
