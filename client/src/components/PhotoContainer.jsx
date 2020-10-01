import React from 'react';
import styled from 'styled-components';

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 25% auto 15% 15%;
  grid-template-rows: repeat(3, 33.333%);
  grid-gap: 2px;
  column-gap: 2px;
`;

const PhotoOne = styled.figure`
  grid-column-start: 1;
  grid-row-start: 1;
  width: 139px;
  height: 139px;
`;
const PhotoTwo = styled.figure`
  grid-column-end: 2;
  grid-row-end: 4;
  width: 139px;
  height: 139px;
`;
const PhotoThree = styled.figure`
  grid-area: 2 / 2 / 4 / 3 ;
`;
const PhotoFour = styled.figure`
  grid-area: 1 / 3 / 2 / 4 ;
`;
const PhotoFive = styled.figure`
  grid-area: 2 / 3 / 3 / 4 ;
`;
const PhotoSix = styled.figure`
  grid-area: 3 / 3 / 4 / 4 ;
`;
const PhotoSeven = styled.figure`
  grid-area: 1 / 4 / 2 / 5 ;
`;
const PhotoEight = styled.figure`
  grid-area: 2 / 4 / 3 / 5 ;
`;
const PhotoNine = styled.figure`
  grid-area: 3 / 4 / 4 / 5 ;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const PhotoContainer = ({ photos }) => {
  <PhotoGrid>
    <PhotoOne>
      <Image src={`${photos[0].url_path}`}></Image>
    </PhotoOne>
    <PhotoTwo>
      <Image src={`${photos[1].url_path}`}></Image>
    </PhotoTwo>
    <PhotoThree>
      <Image src={`${photos[2].url_path}`}></Image>
    </PhotoThree>
    <PhotoFour>
      <Image src={`${photos[3].url_path}`}></Image>
    </PhotoFour>
    <PhotoFive>
      <Image src={`${photos[4].url_path}`}></Image>
    </PhotoFive>
    <PhotoSix>
      <Image src={`${photos[5].url_path}`}></Image>
    </PhotoSix>
    <PhotoSeven>
      <Image src={`${photos[6].url_path}`}></Image>
    </PhotoSeven>
    <PhotoEight>
      <Image src={`${photos[7].url_path}`}></Image>
    </PhotoEight>
    <PhotoNine>
      <Image src={`${photos[8].url_path}`}></Image>
    </PhotoNine>
  </PhotoGrid>
};
