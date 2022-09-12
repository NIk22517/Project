import React from "react";
import styled from "styled-components";
import ShowUploadedImage from "./ShowUploadedImage";

const ImageUpload = ({ file, setFile }) => {
  const handleChange = (e) => {
    const data = e.target.files[0];
    setFile(data);
  };

  return (
    <>
      <FileInput>
        <input
          type='file'
          id='file'
          className='file'
          accept='image/*'
          onChange={handleChange}
        />
        <label htmlFor='file'>Select file</label>

        {file && <ShowUploadedImage file={file} />}
      </FileInput>
    </>
  );
};

export default ImageUpload;

const FileInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .file {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
    border: none;
  }
  label {
    display: block;
    position: relative;
    width: 200px;
    height: 50px;
    border-radius: 25px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-out;
    color: #342ead;
    font-size: 20px;
    margin-bottom: 3rem;
  }

  input:hover + label,
  input:focus + label {
    transform: scale(1.02);
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
  input:focus + label {
    outline: 1px solid #000;
    outline: -webkit-focus-ring-color auto 2px;
  }
`;
