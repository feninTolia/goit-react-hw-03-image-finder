import React, { Component } from 'react';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';

const AUTH_KEY = '29946352-1a4291eb7954147c8b1f721f5';

export class GalleryView extends Component {
  state = {
    photos: [],
    query: '',
    page: 1,
    status: 'idle',
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log('in did update');
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevProps.query !== this.props.query) {
      this.setState({ query: this.props.query });
    }

    if (prevQuery !== nextQuery) {
      //   console.log('in IF');
      this.setState({ status: 'pending' });

      fetch(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${AUTH_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error('Немає картинок за таким запитом =(')
          );
        })
        .then(photos => {
          this.setState({ photos: photos.hits, status: 'resolved' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevPage < nextPage) {
      //   console.log('in more if');
      fetch(
        `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=${AUTH_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error('Більше немає картинок за таким запитом =(')
          );
        })
        .then(newPhotos => {
          this.setState(prevState => ({
            photos: [...prevState.photos, ...newPhotos.hits],
          }));
        })
        .catch(error => this.setState({ error }));
    }
  }

  handleLoadMoreBtnClick = () => {
    // console.log('btn click');
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { status } = this.state;

    if (status === 'idle') {
      console.log('in idle return');
      return <div>Введіть пошуковий запит</div>;
    }

    if (status === 'pending') {
      console.log('in pending return');

      return <Loader />;
    }

    if (status === 'resolved') {
      console.log('in resolved return');
      return (
        <>
          <ImageGallery photos={this.state.photos} />
          <Button onLoadMoreBtnClick={this.handleLoadMoreBtnClick} />
        </>
      );
    }
  }
}

export default GalleryView;
