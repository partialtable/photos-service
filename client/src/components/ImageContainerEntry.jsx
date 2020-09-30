/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const PhotoListItem = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
