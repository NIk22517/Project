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
      <PhotoFrameContainer ref={downloadElement}>
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
          <img className='frame-img' src={FrameOne} alt='' onLoad={onImgLoad} />
        </div>
      </PhotoFrameContainer>
    </>
  );
};

export default PhotoFrame;

const PhotoFrameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  height: 80vh;
  position: relative;

  .uploaded-image {
    position: absolute;
    top: 0%;
  }
  .frame-image {
    position: absolute;
    top: 0%;
  }

  .upload-img {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }

  .frame-img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 676px) {
    margin: 0rem;
  }
`;
