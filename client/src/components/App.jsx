/* eslint-disable import/extensions */
import React from 'react';
import Header from './Header.jsx';
import Categorylist from './CategoryList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (

      <div>
        <Header />
        <Categorylist />
      </div>
    );
  }
}

export default App;
