import React from 'react';
import { IUser } from 'app/types/api';
import './style';
import DataEntry from './DataEntry';
import DataSection from './DataSection';
import store from 'app/store';
import axios from 'axios';
import config from 'app/config';
import {
  ISELECT_USER,
  IHANDLE_ALBUMS_FETCH,
  IHANDLE_ALBUMS_FETCH_SUCCESS,
  IHANDLE_ALBUMS_FETCH_ERROR,
} from 'app/store/types/actions';

interface IProps {
  user: IUser;
}

export default class User extends React.PureComponent<IProps> {
  handleHeaderClick = () => {
    store.dispatch<ISELECT_USER>( {
      type: 'SELECT_USER',
      user: this.props.user,
    } );

    this.fetchAlbums();
  }
  fetchAlbums () {
    store.dispatch<IHANDLE_ALBUMS_FETCH>( {
      type: 'HANDLE_ALBUMS_FETCH',
    } );

    axios( `${config.urls.albums}?userId=${this.props.user.id}` )
      .then( this.handleAlbumsFetchSuccess )
      .catch( this.handleAlbumsFetchError );
  }
  handleAlbumsFetchSuccess = res => {
    store.dispatch<IHANDLE_ALBUMS_FETCH_SUCCESS>( {
      type: 'HANDLE_ALBUMS_FETCH_SUCCESS',
      albums: res.data,
    } );
  };
  handleAlbumsFetchError = res => store.dispatch<IHANDLE_ALBUMS_FETCH_ERROR>( {
    type: 'HANDLE_ALBUMS_FETCH_ERROR',
    res,
  } );
  render () {
    let
      {
        props: {
          user,
        },
        handleHeaderClick,
      } = this;

    return <div className='User'>
      <div 
        className='User__header'
        onClick={handleHeaderClick}
      >{user.name}</div>

      <div className='User__content'>
        <DataSection title='Общие данные:'>
          <DataEntry description='Логин'>{user.username}</DataEntry>
          <DataEntry description='e-mail'>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </DataEntry>
          <DataEntry description='Телефон'>{user.phone}</DataEntry>
          <DataEntry description='WWW'>
            <a 
              href={`http://${user.website}`}
              target='blank'
            >{user.website}</a>
          </DataEntry>
        </DataSection>

        <DataSection title='Местоположение:'>
          <DataEntry description='Город'>{user.address.city}</DataEntry>
          <DataEntry description='Улица'>{user.address.street}</DataEntry>
          <DataEntry description='Дом'>{user.address.suite}</DataEntry>
          <DataEntry description='Почтовый индекс'>{user.address.zipcode}</DataEntry>
          <DataEntry description='Координаты'>{
            `${user.address.geo.lat}, ${user.address.geo.lng}`
          }</DataEntry>
        </DataSection>

        <DataSection title='Компания:'>
          <DataEntry description='Название'>{user.company.name}</DataEntry>
          <DataEntry description='Слоган'>{user.company.catchPhrase}</DataEntry>
          <DataEntry description='Деятельность'>{user.company.bs}</DataEntry>
        </DataSection>
      </div>
    </div>;
  }
}