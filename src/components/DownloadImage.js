import React from "react";
import styled from "styled-components";
import * as htmlToImage from "html-to-image";

const DownloadImage = ({ downloadElement }) => {
  const downloadImage = async () => {
    const dataUrl = await htmlToImage.toPng(downloadElement.current);

    // download image
    const link = document.createElement("a");
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  };
  return (
    <>
      <Download>
        <button onClick={downloadImage}>Download</button>
      </Download>
    </>
  );
};

export default DownloadImage;

const Download = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: absolute;
  bottom: -10%; */
  button {
    background: linear-gradient(40deg, #ff6ec4, #7873f5);
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    border: none;
    padding: 1rem 4rem;
    border-radius: 25px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin: 2rem 0 1rem 0;
  }
`;
