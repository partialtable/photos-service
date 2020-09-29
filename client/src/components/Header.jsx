/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';

const PhotosHeader = styled.h2`
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #2d333f;
  padding-bottom: 16px;
  border-bottom: 1px solid #d8d9db;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesNumber: 40,
    };
  }

  render() {
    const { imagesNumber } = this.state;
    return (
      <div>
        <PhotosHeader>
          {imagesNumber} Photos
        </PhotosHeader>
      </div>
    );
  }
}

export default Header;
