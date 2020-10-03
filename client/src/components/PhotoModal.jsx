/* eslint-disable react/prop-types */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import styled from 'styled-components';

import Modal from 'react-modal';

const GalleryModal = styled.div`
  position: relative;
  width: 660px;
  display: flex;
  justify-content: center;
`;

const ArrowButton = styled.button`
  cursor: pointer;
  max-height: 700px;
  max-width: 700px;
  left: 0;
  pointer-events: none;
  color: #2d333f;
  outline: 0;
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  font-family: icons;
  speak: none;
  font-style: normal;
  font-weight: 700;
  font-variant: normal;
  text-transform: none;
  line-height; 1;
  background-color: transparent;
  border: 0;
  overflow: visible;
`;

const ScrollerContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: static;
  margin: 0;
  padding: 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: calc(300px - 64px);
  margin: 0 auto;
  align-self: center;
  border-style: none;
`;

const DescriptionFooter = styled.div`
  position: relative;
  margin: 8px 0 0;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const FooterText = styled.div`
  float: left:
  max-width: 90%;
  margin: 0 8px 0 0;
  display: block;
  line-height: 1.15;
`;

const CloseButton = styled.button`
  position: absolute
  padding: 25px;
  right: 0;
  top: 20px;
  background-color: transparent;
  border: none;
  overflow: visible;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
`;

const PhotoModal = ({ showModal, toggleModal, photos }) => {
  if (showModal) {
    return (
      <div>
        <button type="button" onClick={toggleModal}>Open Modal</button>
        <Modal
          isOpen={showModal}
          onRequestClose={toggleModal}
        >
          <div>My Modal</div>
          <button type="button" onClick={toggleModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
  return (
    <div></div>
  );
};

export default PhotoModal;
