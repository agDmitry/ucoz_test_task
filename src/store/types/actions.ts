import {
  IUser,
  IAlbum,
  IPhoto,
} from 'app/types/api';
import { AxiosError } from 'axios';

export interface IHANDLE_USERS_FETCH {
  type: 'HANDLE_USERS_FETCH';
}

export interface IHANDLE_USERS_FETCH_SUCCESS {
  type: 'HANDLE_USERS_FETCH_SUCCESS';
  users: IUser[];
}

export interface IHANDLE_USERS_FETCH_ERROR {
  type: 'HANDLE_USERS_FETCH_ERROR';
  res: AxiosError;
}

export interface ISELECT_USER {
  type: 'SELECT_USER';
  user: IUser;
}

export interface IDESELECT_USER {
  type: 'DESELECT_USER';
}

export interface IHANDLE_ALBUMS_FETCH {
  type: 'HANDLE_ALBUMS_FETCH';
}

export interface IHANDLE_ALBUMS_FETCH_SUCCESS {
  type: 'HANDLE_ALBUMS_FETCH_SUCCESS';
  albums: IAlbum[];
}

export interface IHANDLE_ALBUMS_FETCH_ERROR {
  type: 'HANDLE_ALBUMS_FETCH_ERROR';
  res: AxiosError;
}

export interface ISELECT_ALBUM {
  type: 'SELECT_ALBUM';
  album: IAlbum;
}

export interface IDESELECT_ALBUM {
  type: 'DESELECT_ALBUM';
}

export interface IHANDLE_PHOTOS_FETCH {
  type: 'HANDLE_PHOTOS_FETCH';
}

export interface IHANDLE_PHOTOS_FETCH_SUCCESS {
  type: 'HANDLE_PHOTOS_FETCH_SUCCESS';
  photos: IPhoto[];
}

export interface IHANDLE_PHOTOS_FETCH_ERROR {
  type: 'HANDLE_PHOTOS_FETCH_ERROR';
  res: AxiosError;
}

export interface ISELECT_PHOTO {
  type: 'SELECT_PHOTO';
  photo: IPhoto;
}

export interface IDESELECT_PHOTO {
  type: 'DESELECT_PHOTO';
}

export interface IRESET_REQUEST_STATUS {
  type: 'RESET_REQUEST_STATUS';
}