/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import Header from './Header.jsx';
import Categorylist from './CategoryList.jsx';
import ImageContainer from './ImageContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant_name: '',
      restaurant_id: '',
      photos: [],
      showModal: false,
    };
    this.getRestaurantsPhotos = this.getRestaurantsPhotos.bind(this);
  }

  componentDidMount() {
    this.getRestaurantsPhotos();
  }

  getRestaurantsPhotos() {
    axios.get('api/restaurants/')
      .then((response) => {
        console.log(response.data);
        this.setState({
          restaurant_name: response.data[16].name,
          restaurant_id: response.data[16].id,
          photos: response.data[16].photos,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { photos } = this.state;
    return (
      <div>
        <Header className="header" photos={photos} />
        <Categorylist className="categories" />
        <ImageContainer photos={photos} getPhotos={this.getRestaurantsPhotos} />
      </div>
    );
  }
}

export default App;
