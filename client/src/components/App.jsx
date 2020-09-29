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
      photos: [],
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    axios.get('/api/restaurants/')
      .then((response) => {
        console.log(response.data);
        this.setState({
          photos: response.data.photos,
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
        <Header className="header" />
        <Categorylist className="categories" />
        <ImageContainer photos={photos} getPhotos={this.getPhotos} />
      </div>
    );
  }
}

export default App;
