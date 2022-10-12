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
    loadMoreBtn: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevState.photos !== this.state.photos) {
      this.props.handleModalData(this.state.photos);
    }

    if (prevProps.query !== this.props.query) {
      this.setState({ query: this.props.query });
    }

    if (prevQuery !== nextQuery) {
      this.setState({ status: 'pending', page: 1, loadMoreBtn: true });

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
          if (newPhotos.hits.length < 12) {
            this.setState({ loadMoreBtn: false });
          }

          this.setState(prevState => ({
            photos: [...prevState.photos, ...newPhotos.hits],
          }));
        })
        .catch(error => this.setState({ error }));
    }
  }

  handleLoadMoreBtnClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { status } = this.state;

    if (status === 'idle') {
      return (
        <img
          src="https://media.tenor.com/nEP6ovplEd8AAAAi/so-really.gif"
          alt="confused man"
          className="idle-gif"
        />
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'resolved' && this.state.photos.length === 0) {
      return (
        <img
          src="https://media.tenor.com/nEP6ovplEd8AAAAi/so-really.gif"
          alt="confused man"
          className="idle-gif"
        />
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery
            photos={this.state.photos}
            onFullImgLoad={this.handleFullImgLoad}
          />
          {this.state.loadMoreBtn && this.state.photos.length !== 0 && (
            <Button onLoadMoreBtnClick={this.handleLoadMoreBtnClick} />
          )}
        </>
      );
    }

    if (status === 'rejected') {
      return <div>Ooops, something went wrong</div>;
    }
  }
}

export default GalleryView;
