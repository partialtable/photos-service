/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';

const PhotoListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-right: 7px;
  margin-bottom: 7px;
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
