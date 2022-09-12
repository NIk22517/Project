import React, { useState, useRef } from "react";
import styled from "styled-components";
import FrameOne from "../assets/frame1.png";
import DownloadImage from "./DownloadImage";

const PhotoFrame = ({ file }) => {
  const [width, setWidth] = useState(null);
  const [heigth, setHeigth] = useState(null);

  const downloadElement = useRef(null);

  const onImgLoad = ({ target: img }) => {
    const { offsetHeight, offsetWidth } = img;
    console.log(`Width ${offsetHeight} Height ${offsetWidth}`);

    setWidth(offsetWidth);
    setHeigth(offsetHeight);
  };

  return (
    <PhotoFrameWithDownlod>
      <Photo ref={downloadElement} heigth={heigth}>
        <PhotoFrameContainer>
          <div className='uploaded-image'>
            <img
              className='upload-img'
              src={URL.createObjectURL(file)}
              alt='profile'
              width={width}
              height={heigth}
            />
          </div>

          <div className='frame-image'>
            <img
              className='frame-img'
              src={FrameOne}
              alt=''
              onLoad={onImgLoad}
            />
          </div>
        </PhotoFrameContainer>
      </Photo>
      <DownloadImage downloadElement={downloadElement} heigth={heigth} />
    </PhotoFrameWithDownlod>
  );
};

export default PhotoFrame;

const PhotoFrameWithDownlod = styled.div`
  margin-top: 2rem;
  margin-bottom: 10rem;
`;

const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 1080px;

  @media (max-width: 676px) {
    height: 45vh;
  }
`;

const PhotoFrameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .uploaded-image {
    position: absolute;
    top: 0%;
  }
  .frame-image {
    position: absolute;
    top: 0%;
  }
  /* .upload-img {
    width: 300px;
    height: 300px;
  }

  .frame-img {
    width: 300px;
    height: 300px;
  } */
  @media (max-width: 676px) {
    img {
      width: 380px;
    }
    .upload-img {
      object-fit: cover;
    }
  }
`;
