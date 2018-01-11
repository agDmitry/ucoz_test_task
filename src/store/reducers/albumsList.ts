import {
  IAlbum,
} from 'app/types/api';
import {
  IHANDLE_ALBUMS_FETCH_SUCCESS,
  IDESELECT_USER,
} from 'app/store/types/actions';

export default function albumsListReducer(
  state: IAlbum[] | null = null, 
  action: IHANDLE_ALBUMS_FETCH_SUCCESS | IDESELECT_USER
): IAlbum[] | null {
  switch (action.type) {
    case 'HANDLE_ALBUMS_FETCH_SUCCESS': return action.albums;

    case 'DESELECT_USER': return null;
  
    default: return state;
  }
}