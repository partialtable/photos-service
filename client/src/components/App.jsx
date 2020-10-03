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
import Header from './Header.jsx';
import Categorylist from './CategoryList.jsx';
import PhotoContainer from './PhotoContainer.jsx';

const Wrapper = styled.div`
  display: block;
  max-width: 660px;
  max-height: 500px;
  margin: auto;
  position: relative;
  top: 0%;
  bottom: 0%;
  left: 5%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: '',
      restaurant_id: '',
      photos: [],
      ableToRender: false,
    };
    this.getRestaurantsPhotos = this.getRestaurantsPhotos.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  componentDidMount() {
    this.getRestaurantsPhotos();
  }

  getRestaurantsPhotos() {
    axios.get('api/restaurants/')
      .then((response) => {
        this.setState({
          restaurant_name: response.data[16].name,
          restaurant_id: response.data[16].id,
          photos: response.data[16].photos,
          ableToRender: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleImageClick() {
    console.log('image clicked');
  }

  render() {
    if (this.state.ableToRender) {
      return (
        <Wrapper>
          <Header className="header" photos={this.state.photos} />
          <Categorylist className="categories" />
          <PhotoContainer
            className="container"
            photos={this.state.photos}
            handleClick={this.handleImageClick}
          />
        </Wrapper>
      );
    }
    return (
      <div></div>
    );
  }
}

export default App;
