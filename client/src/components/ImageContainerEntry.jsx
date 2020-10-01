/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const PhotoListItem = styled.li`
  width: 100px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  list-style-type: none;
`;

const Image = styled.img`
max-width: 100%;
max-height: 100%;
`;

const ImageContainerEntry = ({ photoUrl }) => {
  return (
    <PhotoListItem>
      <Image src={`${photoUrl}`} alt="">
      </Image>
    </PhotoListItem>
  );
};

export default ImageContainerEntry;
