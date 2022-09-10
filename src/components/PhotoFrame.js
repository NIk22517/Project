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
    <>
      <DownloadImage downloadElement={downloadElement} />
      <Photo ref={downloadElement}>
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
    </>
  );
};

export default PhotoFrame;

const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 540px;
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
  .frame-image img {
    width: 420px;
    height: 540px;
  }
  .uploaded-image img {
    width: 420px;
    height: 540px;
    object-fit: cover;
  }
  @media screen {
    img{
      width: 380px;
    }
}
`;
