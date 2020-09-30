/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ImageContainerEntry from './ImageContainerEntry.jsx';

const StyledPhotoList = styled.ul`
  display: block;
  width: 100%;
  overflow: hidden;
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
      <div>
        <StyledPhotoList>
          {mappedPhotos}
        </StyledPhotoList>
      </div>
    );
  }
}

export default ImageContainer;
