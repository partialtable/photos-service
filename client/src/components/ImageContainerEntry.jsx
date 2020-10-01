/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const PhotoListItem = styled.li`
  list-style-type: none;
  `;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
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
