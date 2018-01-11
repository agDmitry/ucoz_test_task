import {
  IAlbum,
} from 'app/types/api';
import {
  ISELECT_ALBUM,
  IDESELECT_ALBUM,
} from 'app/store/types/actions';

export default function selectedAlbumReducer(
  state: IAlbum | null = null,
  action: ISELECT_ALBUM | IDESELECT_ALBUM
): IAlbum | null {
  switch (action.type) {
    case 'SELECT_ALBUM': return action.album;
    
    case 'DESELECT_ALBUM': return null;
  
    default: return state;
  }
}