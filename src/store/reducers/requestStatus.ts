import {
  IHANDLE_USERS_FETCH,
  IHANDLE_USERS_FETCH_SUCCESS,
  IHANDLE_USERS_FETCH_ERROR,
  IHANDLE_ALBUMS_FETCH,
  IHANDLE_ALBUMS_FETCH_SUCCESS,
  IHANDLE_ALBUMS_FETCH_ERROR,
  IHANDLE_PHOTOS_FETCH,
  IHANDLE_PHOTOS_FETCH_SUCCESS,
  IHANDLE_PHOTOS_FETCH_ERROR,
  IRESET_REQUEST_STATUS,
} from 'app/store/types/actions';
import { IRequestStatus } from 'app/store/types';

export default function requestStatusReducer(
  state: IRequestStatus | null = null,
  action: 
    IHANDLE_USERS_FETCH |
    IHANDLE_USERS_FETCH_SUCCESS |
    IHANDLE_USERS_FETCH_ERROR |
    IHANDLE_ALBUMS_FETCH |
    IHANDLE_ALBUMS_FETCH_SUCCESS |
    IHANDLE_ALBUMS_FETCH_ERROR |
    IHANDLE_PHOTOS_FETCH |
    IHANDLE_PHOTOS_FETCH_SUCCESS |
    IHANDLE_PHOTOS_FETCH_ERROR |
    IRESET_REQUEST_STATUS
): IRequestStatus | null {
  switch (action.type) {
    case 'HANDLE_USERS_FETCH': return { 
      state: 'pending',
      msg: 'Загрузка пользователей', 
    };

    case 'HANDLE_ALBUMS_FETCH': return { 
      state: 'pending',
      msg: 'Загрузка альбомов', 
    };

    case 'HANDLE_PHOTOS_FETCH': return { 
      state: 'pending',
      msg: 'Загрузка фотографий', 
    };

    case 'HANDLE_USERS_FETCH_ERROR': return { 
      state: 'error',
      msg: `Ошибка загрузки пользователей: ${action.res.message}`, 
    };

    case 'HANDLE_ALBUMS_FETCH_ERROR': return { 
      state: 'error',
      msg: `Ошибка загрузки альбомов: ${action.res.message}`, 
    };

    case 'HANDLE_PHOTOS_FETCH_ERROR': return { 
      state: 'error',
      msg: `Ошибка загрузки фотографий: ${action.res.message}`, 
    };

    case 'HANDLE_USERS_FETCH_SUCCESS': 
    case 'HANDLE_ALBUMS_FETCH_SUCCESS': 
    case 'HANDLE_PHOTOS_FETCH_SUCCESS':
    case 'RESET_REQUEST_STATUS': return null;
  
    default: return state;
  }
}