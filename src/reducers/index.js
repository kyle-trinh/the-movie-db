import { combineReducers } from 'redux';
import movie from './movie';
import tv from './tv';
import multi from './multi';
export default combineReducers({ movie, tv, multi });
