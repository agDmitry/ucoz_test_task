import React from 'react';
import { IAlbum } from 'app/types/api';
import './style';
import store from 'app/store';
import axios from 'axios';
import config from 'app/config';
import {
  ISELECT_ALBUM,
  IHANDLE_PHOTOS_FETCH,
  IHANDLE_PHOTOS_FETCH_SUCCESS,
  IHANDLE_PHOTOS_FETCH_ERROR,
} from 'app/store/types/actions';

interface IProps {
  album: IAlbum;
}

export default class Album extends React.PureComponent<IProps> {
  handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    store.dispatch<ISELECT_ALBUM>( {
      type: 'SELECT_ALBUM',
      album: this.props.album,
    } );

    this.fetchPhotos();
  }
  fetchPhotos () {
    store.dispatch<IHANDLE_PHOTOS_FETCH>( {
      type: 'HANDLE_PHOTOS_FETCH',
    } );

    axios( `${config.urls.photos}?albumId=${this.props.album.id}` )
      .then( this.handlePhotosFetchSuccess )
      .catch( this.handlePhotosFetchError );
  }
  handlePhotosFetchSuccess = res => {
    store.dispatch<IHANDLE_PHOTOS_FETCH_SUCCESS>( {
      type: 'HANDLE_PHOTOS_FETCH_SUCCESS',
      photos: res.data,
    } );
  };
  handlePhotosFetchError = res => store.dispatch<IHANDLE_PHOTOS_FETCH_ERROR>( {
    type: 'HANDLE_PHOTOS_FETCH_ERROR',
    res,
  } );
  render () {
    let
      {
        props: {
          album,
        },
        handleClick,
      } = this;

    return <a 
      className='Album'
      onClick={handleClick}
      href='#'
    >
      {album.title}
    </a>;
  }
}