import { createStore } from 'redux';
import reducer from './reducers';
import IStore from './types';

export default createStore<IStore>( reducer );
