/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ImageContainerEntry from './ImageContainerEntry.jsx';

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50% 50%;
  grid-gap: 2px;
  column-gap: 2px;
`;

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const photos = this.props.photos;
    const mappedPhotos = photos.map((photo, key) => {
      return (
        <ImageContainerEntry
          photoUrl={photo.url_path}
          key={`${photo.photo_id} ${key}`}
        />
      );
    });
    return (
      <PhotoGrid>
        {mappedPhotos}
      </PhotoGrid>
    );
  }
}

export default ImageContainer;
