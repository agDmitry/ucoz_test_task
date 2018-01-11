import React from 'react';
import ReactDOM from 'react-dom';
import StoreShape from 'app/store/types';
import store from 'app/store';
import axios from 'axios';
import config from 'app/config';
import {
  IHANDLE_USERS_FETCH,
  IHANDLE_USERS_FETCH_SUCCESS,
  IHANDLE_USERS_FETCH_ERROR,
} from 'app/store/types/actions';
import UsersList from 'app/components/UsersList';
import AlbumsList from 'app/components/AlbumsList';
import PhotosList from 'app/components/PhotosList';
import PhotoPreview from 'app/components/PhotoPreview';
import RequestStatus from 'app/components/RequestStatus';
import './style';

export default class App extends React.PureComponent<{}, StoreShape> {
  state = store.getState();
  componentDidMount () {
    store.subscribe( () => this.setState( store.getState() ) );

    this.fetchUsers();
  }
  fetchUsers () {
    store.dispatch<IHANDLE_USERS_FETCH>( {
      type: 'HANDLE_USERS_FETCH',
    } );

    axios( config.urls.users )
      .then( this.handleUsersFetchSuccess )
      .catch( this.handleUsersFetchError );
  }
  handleUsersFetchSuccess = res => store.dispatch<IHANDLE_USERS_FETCH_SUCCESS>( {
    type: 'HANDLE_USERS_FETCH_SUCCESS',
    users: res.data,
  } );
  handleUsersFetchError = res => store.dispatch<IHANDLE_USERS_FETCH_ERROR>( {
    type: 'HANDLE_USERS_FETCH_ERROR',
    res,
  } );
  render () {
    let
      {
        state: {
          usersList,
          selectedUser,
          albumsList,
          selectedAlbum,
          photosList,
          selectedPhoto,
          requestStatus,
        },
      } = this,
      elemToRender: React.ReactNode = null;

    if ( selectedPhoto !== null ) {
      elemToRender = <PhotoPreview
        photo={selectedPhoto}
      />;
    } else if (
      Array.isArray( photosList ) &&
      selectedAlbum !== null
    ) {
      elemToRender = <PhotosList 
        photos={photosList}
        album={selectedAlbum}
        />;
    } else if (
      Array.isArray( albumsList ) &&
      selectedUser !== null
    ) {
      elemToRender = <AlbumsList 
        albums={albumsList}
        user={selectedUser}
      />;
    } else if ( Array.isArray( usersList ) ) {
      elemToRender = <UsersList users={usersList}/>;
    }

    return <div className='App'>
      {
        requestStatus !== null &&
        <RequestStatus status={requestStatus}/>
      }

      {elemToRender}
    </div>;
  }
}

ReactDOM.render( <App/>, window.document.getElementById( 'react-root' ) );