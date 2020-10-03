/* eslint-disable no-console */
/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable-next-line react/self-closing-comp */

import React from 'react';
import styled from 'styled-components';

const PhotoGrid = styled.div`
  display: grid;
  height: 350px;
  width: 680px;
  position: absolute;
  grid-template-columns: 25% auto 30%;
  grid-template-rows: repeat(2, 50%);
  grid-gap: 2px;
  column-gap: 2px;
  justify-items: center;
  align-items: center;
`;

const InnerGrid = styled.div`
  grid-area: 1 / 3 / 3 / 4 ;
  display: grid;
  height: inherit;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(3, 33.333%);
  grid-gap: 2px;
  column-gap: 2px;
  justify-items: center;
  align-items: center;
`;

const PhotoOne = styled.figure`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  height: 100%;
  width: 100%;
`;
const PhotoTwo = styled.figure`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  height: 100%;
  width: 100%;
`;
const PhotoThree = styled.figure`
  grid-area: 1 / 2 / 3 / 3 ;
  height: 100%;
  width: 100%;
`;
const PhotoFour = styled.figure`
grid-area: 1 / 1 / 2 / 2 ;
height: 100%;
width: 100%;
`;
const PhotoFive = styled.figure`
  grid-area: 2 / 1 / 3 / 2 ;
  height: 100%;
  width: 100%;
`;
const PhotoSix = styled.figure`
grid-area: 3 / 1 / 4 / 2 ;
height: 100%;
width: 100%;
`;
const PhotoSeven = styled.figure`
grid-area: 1 / 2 / 2 / 3 ;
height: 100%;
width: 100%;
`;
const PhotoEight = styled.figure`
grid-area: 2 / 2 / 3 / 3 ;
height: 100%;
width: 100%;
`;
const PhotoNine = styled.figure`
  grid-area: 3 / 2 / 4 / 3 ;
  height: 100%;
  width: 100%;
  background-color: black;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const LastImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  opacity: .8;

  &:hover{
    opacity: .4;
  }
`;
const MorePhotosText = styled.div`
  color: #aaadab;
  position: absolute;
  bottom: 8px;
  right: 16px;
`;

const PhotoContainer = ({ photos, handleClick }) => {
  return (
    <PhotoGrid>
      <PhotoOne>
        <Image onClick={handleClick} src={`${photos[0].url_path}`}></Image>
      </PhotoOne>
      <PhotoTwo>
        <Image onClick={handleClick} src={`${photos[1].url_path}`}></Image>
      </PhotoTwo>
      <PhotoThree>
        <Image onClick={handleClick} src={`${photos[2].url_path}`}></Image>
      </PhotoThree>
      <InnerGrid>
        <PhotoFour>
          <Image onClick={handleClick} src={`${photos[3].url_path}`}></Image>
        </PhotoFour>
        <PhotoFive>
          <Image onClick={handleClick} src={`${photos[4].url_path}`}></Image>
        </PhotoFive>
        <PhotoSix>
          <Image onClick={handleClick} src={`${photos[5].url_path}`}></Image>
        </PhotoSix>
        <PhotoSeven>
          <Image onClick={handleClick} src={`${photos[6].url_path}`}></Image>
        </PhotoSeven>
        <PhotoEight>
          <Image onClick={handleClick} src={`${photos[7].url_path}`}></Image>
        </PhotoEight>
        <PhotoNine>
          <LastImage onClick={handleClick} src={`${photos[8].url_path}`}></LastImage>
          <MorePhotosText>+91 more</MorePhotosText>
        </PhotoNine>
      </InnerGrid>
    </PhotoGrid>
  );
};

export default PhotoContainer;
