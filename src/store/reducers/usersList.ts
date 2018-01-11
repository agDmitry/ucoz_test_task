import {
  IUser,
} from 'app/types/api';
import {
  IHANDLE_USERS_FETCH_SUCCESS,
} from 'app/store/types/actions';

export default function usersListReducer(
  state: IUser[] | null = null, 
  action: IHANDLE_USERS_FETCH_SUCCESS
): IUser[] | null {
  switch (action.type) {
    case 'HANDLE_USERS_FETCH_SUCCESS': return action.users;
  
    default: return state;
  }
}