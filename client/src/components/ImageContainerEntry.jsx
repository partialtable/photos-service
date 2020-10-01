/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const PhotoListItem = styled.li`
  width: 25%;
  height: 25%;
  object-fit: cover;
  cursor: pointer;
  list-style-type: none;
`;

const Image = styled.img`

`;

const ImageContainerEntry = ({ photoUrl }) => {
  return (
    <PhotoListItem>
      <img src={`${photoUrl}`} alt=""></img>
    </PhotoListItem>
  );
};

export default ImageContainerEntry;
