import {
  IUser,
} from 'app/types/api';
import {
  ISELECT_USER,
  IDESELECT_USER,
} from 'app/store/types/actions';

export default function selectedUserReducer(
  state: IUser | null = null,
  action: ISELECT_USER | IDESELECT_USER
): IUser | null {
  switch (action.type) {
    case 'SELECT_USER': return action.user;
    
    case 'DESELECT_USER': return null;
  
    default: return state;
  }
}