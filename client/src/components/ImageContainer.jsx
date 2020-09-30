/* eslint-disable react/no-array-index-key */
/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import ImageContainerEntry from './ImageContainerEntry.jsx';

const PhotoGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  cursor: pointer;
  margin: 10px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
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
        <PhotoGrid>
          {mappedPhotos}
        </PhotoGrid>
      </div>
    );
  }
}

export default ImageContainer;
