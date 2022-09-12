import React from "react";
import styled from "styled-components";
import * as htmlToImage from "html-to-image";

const DownloadImage = ({ downloadElement, heigth }) => {
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
  position: absolute;
  width: 100%;
  margin-top: 3rem;
  button {
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
    font-weight: bold;
    font-size: 20px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  button:hover {
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
  }
`;
