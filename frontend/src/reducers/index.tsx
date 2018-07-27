import { combineReducers } from 'redux';
import {IAppState} from '../types';
import commonReducer from './commonReducer';

export const reducers  = combineReducers<IAppState>({
    commonReducer,
});
