import axios from 'axios';
import {
  API_KEY,
  PATH_BASE,
  GET_CREDIT,
  GET_DETAIL,
  GET_NOW_PLAYING,
  GET_POPULAR,
  GET_REVIEWS,
  GET_TOP_RATED,
  GET_TRAILER,
  GET_TRENDING,
  SET_LOADING,
  MOVIE_ERROR
} from '../constants';

export function getTrending() {
  return async function(dispatch) {
    try {
      const res = await axios.get(
        `${PATH_BASE}/trending/movie/day?api_key=${API_KEY}`
      );

      dispatch({
        type: GET_TRENDING,
        payload: res.data.results
      });
    } catch (err) {
      console.log(err);
    }
  };
}
