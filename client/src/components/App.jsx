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
import Header from './Header.jsx';
import Categorylist from './CategoryList.jsx';
// import ImageContainer from './ImageContainer.jsx';
import PhotoContainer2 from './PhotoContainer2.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: '',
      restaurant_id: '',
      photos: ['https://hrsf130-tkout-photo-gallery.s3.us-east-2.amazonaws.com/13.png'],
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
        <div>
          <Header className="header" photos={this.state.photos} />
          <Categorylist className="categories" />
          <PhotoContainer2
            className="container"
            photos={this.state.photos}
            handleClick={this.handleImageClick}
          />
        </div>
      );
    }
    return (
      <div></div>
    );
  }
}

export default App;
