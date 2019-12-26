import {
  GET_TRENDING_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_REVIEWS,
  GET_TOP_RATED_MOVIES,
  GET_TRAILER,
  SET_LOADING,
  MOVIE_ERROR,
  GET_CREDIT,
  GET_DETAIL_MOVIES,
  GET_GENRE_SET_LOADING,
  GET_MOVIES_BY_GENRE,
  GET_DETAIL_SET_LOADING,
  SEARCH_MOVIES,
  GET_TRENDING_MOVIES_ERROR,
  GET_NOW_PLAYING_MOVIES_ERROR,
  GET_POPULAR_MOVIES_ERROR,
  GET_REVIEWS_ERROR,
  GET_TOP_RATED_MOVIES_ERROR,
  GET_TRAILER_ERROR,
  SET_LOADING_ERROR,
  GET_CREDIT_ERROR,
  GET_MOVIES_BY_GENRE_ERROR,
  GET_DETAIL_MOVIES_ERROR,
  SEARCH_MOVIES_ERROR
} from '../constants/types';

const movieLists = [
  GET_TRENDING_MOVIES,
  GET_NOW_PLAYING_MOVIES,
  GET_POPULAR_MOVIES,
  GET_REVIEWS,
  GET_TOP_RATED_MOVIES,
  GET_TRAILER,
  SET_LOADING,
  GET_CREDIT,
  GET_MOVIES_BY_GENRE,
  GET_DETAIL_MOVIES,
  SEARCH_MOVIES
];

const errors = [
  GET_TRENDING_MOVIES_ERROR,
  GET_NOW_PLAYING_MOVIES_ERROR,
  GET_POPULAR_MOVIES_ERROR,
  GET_REVIEWS_ERROR,
  GET_TOP_RATED_MOVIES_ERROR,
  GET_TRAILER_ERROR,
  SET_LOADING_ERROR,
  GET_CREDIT_ERROR,
  GET_MOVIES_BY_GENRE_ERROR,
  GET_DETAIL_MOVIES_ERROR,
  SEARCH_MOVIES_ERROR
];

const initialState = {
  movies: {
    [GET_TRENDING_MOVIES]: null,
    [GET_NOW_PLAYING_MOVIES]: null,
    [GET_POPULAR_MOVIES]: null,
    [GET_REVIEWS]: null,
    [GET_TOP_RATED_MOVIES]: null,
    [GET_TRAILER]: null,
    [SET_LOADING]: null,
    [GET_CREDIT]: null,
    [GET_MOVIES_BY_GENRE]: null,
    [GET_DETAIL_MOVIES]: null,
    [SEARCH_MOVIES]: null
  },

  loading: {
    [GET_TRENDING_MOVIES]: true,
    [GET_NOW_PLAYING_MOVIES]: true,
    [GET_POPULAR_MOVIES]: true,
    [GET_REVIEWS]: true,
    [GET_TOP_RATED_MOVIES]: true,
    [GET_TRAILER]: true,
    [SET_LOADING]: true,
    [GET_CREDIT]: true,
    [GET_MOVIES_BY_GENRE]: true,
    [GET_DETAIL_MOVIES]: true,
    [SEARCH_MOVIES]: true
  },
  errors: {
    [GET_TRENDING_MOVIES_ERROR]: null,
    [GET_NOW_PLAYING_MOVIES_ERROR]: null,
    [GET_POPULAR_MOVIES_ERROR]: null,
    [GET_REVIEWS_ERROR]: null,
    [GET_TOP_RATED_MOVIES_ERROR]: null,
    [GET_TRAILER_ERROR]: null,
    [SET_LOADING_ERROR]: null,
    [GET_CREDIT_ERROR]: null,
    [GET_MOVIES_BY_GENRE_ERROR]: null,
    [GET_DETAIL_MOVIES_ERROR]: null,
    [SEARCH_MOVIES_ERROR]: null
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  var movieList;

  if (movieLists.indexOf(type) !== -1) {
    movieList = type;
  }

  var error;
  if (errors.indexOf(type) !== -1) {
    error = type;
  }

  switch (type) {
    case movieList:
      return {
        ...state,
        movies: {
          ...state.movies,
          [movieList]: payload
        },
        loading: {
          ...state.loading,
          [movieList]: false
        }
      };

    case error:
      return {
        ...state,
        errors: {
          ...state.errors,
          [error]: payload
        },
        loading: {
          ...state.loading,
          [error.slice(0, error.length - 6)]: false
        }
      };

    case GET_GENRE_SET_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [GET_MOVIES_BY_GENRE]: true
        }
      };

    case GET_DETAIL_SET_LOADING:
      return {
        ...state,
        loading: {
          ...state.loading,
          [GET_DETAIL_MOVIES]: true
        }
      };

    case MOVIE_ERROR:
      return {
        ...state,
        errors: [...state.errors, payload]
      };
    default:
      return state;
  }
}
