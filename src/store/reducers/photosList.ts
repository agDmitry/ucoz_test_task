import {
  IPhoto,
} from 'app/types/api';
import {
  IHANDLE_PHOTOS_FETCH_SUCCESS,
  IDESELECT_ALBUM,
} from 'app/store/types/actions';

export default function photosReducer(
  state: IPhoto[] | null = null, 
  action: IHANDLE_PHOTOS_FETCH_SUCCESS | IDESELECT_ALBUM
): IPhoto[] | null {
  switch (action.type) {
    case 'HANDLE_PHOTOS_FETCH_SUCCESS': return action.photos;

    case 'DESELECT_ALBUM': return null;
  
    default: return state;
  }
}