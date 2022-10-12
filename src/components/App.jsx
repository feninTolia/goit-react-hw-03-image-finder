import React, { Component } from 'react';
import GalleryView from './GalleryView/GalleryView';
import Searchbar from './Searchbar/Searchbar';
// import axios from 'axios';

import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    // photos: [],
    query: '',
    page: 1,
    // status: 'idle',
    // error: null,
  };

  handleFormSubmit = query => {
    this.setState({ query, page: 1 });
    console.log(query);
  };

  render() {
    return (
      <div className="App">
        <Searchbar onFormSubmit={this.handleFormSubmit} />
        <GalleryView query={this.state.query} />
        <Modal />
      </div>
    );
  }
}

export default App;
