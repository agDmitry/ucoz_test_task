import {
  IUser,
  IAlbum,
  IPhoto,
} from 'app/types/api';

export default interface IStore {
  usersList: IUser[] | null;
  selectedUser: IUser | null;
  albumsList: IAlbum[] | null;
  selectedAlbum: IAlbum | null;
  photosList: IPhoto[] | null;
  selectedPhoto: IPhoto | null;
  requestStatus: IRequestStatus | null;
}

export interface IRequestStatus {
  state: 'pending' | 'error';
  msg: string;
}