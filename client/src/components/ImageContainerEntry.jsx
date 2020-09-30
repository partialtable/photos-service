/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const PhotoListItem = styled.div`
  display: flex;
  width: 23%;
  height: auto;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 23%;
  height:45%;
`;

const PhotoListAnchor = styled.a`

`;

const ImageContainerEntry = ({ photoUrl }) => {
  return (
    <PhotoListItem>
      <img src={`${photoUrl}`} alt=""></img>
    </PhotoListItem>
  );
};

export default ImageContainerEntry;
