import { combineReducers } from 'redux';
import movie from './movie';
import tv from './tv';
import multi from './multi';
import menuBtn from './menuBtn';
export default combineReducers({ movie, tv, multi, menuBtn });
