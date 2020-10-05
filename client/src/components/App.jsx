/* eslint-disable class-methods-use-this */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from 'react-modal';
import Header from './Header.jsx';
import Categorylist from './CategoryList.jsx';
import PhotoContainer from './PhotoContainer.jsx';
import PhotoModal from './PhotoModal.jsx';

const Wrapper = styled.div`
  display: block;
  max-width: 660px;
  max-height: 500px;
  margin: auto;
  position: relative;
  top: 0%;
  bottom: 0%;
  left: 0;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: '',
      restaurant_id: '',
      photos: [],
      ableToRender: false,
      showModal: false,
      // photo_description: '',
      // photo_date: '',
    };
    this.getRestaurantsPhotos = this.getRestaurantsPhotos.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.getRestaurantsPhotos();
  }

  getRestaurantsPhotos() {
    axios.get('api/restaurants/?id=21')
      .then((response) => {
        this.setState({
          ableToRender: true,
          restaurant_name: response.data.name,
          restaurant_id: response.data.id,
          photos: response.data.photos,
          // photo_description: response.data[20].description,
          // photo_date: response.data[20].date,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleImageClick() {
    this.toggleModal();
  }

  toggleModal() {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  }

  render() {
    const { showModal, photos } = this.state;
    if (this.state.ableToRender) {
      return (
        <Wrapper>
          <Header className="header" photos={this.state.photos} />
          <Categorylist className="categories" />
          <PhotoContainer
            className="container"
            photos={photos}
            handleClick={this.handleImageClick}
          />
          <PhotoModal
            showModal={showModal}
            toggleModal={this.toggleModal}
            photos={photos}
          >
          </PhotoModal>
        </Wrapper>
      );
    }
    return (
      <div></div>
    );
  }
}

export default App;
