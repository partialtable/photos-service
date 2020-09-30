/* eslint-disable arrow-body-style */
import React from 'react';
// import styled from 'styled-components';

const ImageContainerEntry = ({ photoUrl }) => {
  return (
    <li>
      <a href={`${photoUrl}`} role="button">
        <div>
          <img src={`${photoUrl}`} alt=""></img>
        </div>
      </a>
    </li>
  );
};

export default ImageContainerEntry;
