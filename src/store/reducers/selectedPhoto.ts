import {
  IPhoto,
} from 'app/types/api';
import {
  ISELECT_PHOTO,
  IDESELECT_PHOTO,
} from 'app/store/types/actions';

export default function selectedPhotoReducer(
  state: IPhoto | null = null,
  action: ISELECT_PHOTO | IDESELECT_PHOTO
): IPhoto | null {
  switch (action.type) {
    case 'SELECT_PHOTO': return action.photo;
    
    case 'DESELECT_PHOTO': return null;
  
    default: return state;
  }
}