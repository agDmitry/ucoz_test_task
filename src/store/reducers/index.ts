import { combineReducers } from 'redux';
import usersList from './usersList';
import selectedUser from './selectedUser';
import albumsList from './albumsList';
import selectedAlbum from './selectedAlbum';
import selectedPhoto from './selectedPhoto';
import photosList from './photosList';
import requestStatus from './requestStatus';
import IStore from 'app/store/types';

export default combineReducers<IStore>( {
  usersList,
  selectedUser,
  albumsList,
  selectedAlbum,
  selectedPhoto,
  photosList,
  requestStatus,
} );