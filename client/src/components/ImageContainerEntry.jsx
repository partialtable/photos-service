/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const PhotoListItem = styled.li`
  list-style-type: none;
  width: 23%;
  height: auto:
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
