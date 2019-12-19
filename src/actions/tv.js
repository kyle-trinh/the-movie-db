import {
  GET_NOW_PLAYING_TV,
  GET_TOP_RATED_TV,
  GET_POPULAR_TV,
  PATH_BASE,
  API_KEY
} from '../constants';
import axios from 'axios';

// get now playing tv shows
export function getNowPlayingTV() {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`
      );

      dispatch({
        type: GET_NOW_PLAYING_TV,
        payload: res.data.results
      });
    } catch (err) {
      console.log(err);
    }
  };
}

// get popular tv shows
export function getPopularTV() {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
      );

      dispatch({
        type: GET_POPULAR_TV,
        payload: res.data.results
      });
    } catch (err) {
      console.log(err);
    }
  };
}

// get top rated tv shows
export function getTopRatedTV() {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );

      dispatch({
        type: GET_TOP_RATED_TV,
        payload: res.data.results
      });
    } catch (err) {
      console.log(err);
    }
  };
}
