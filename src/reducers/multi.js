import {
  GET_MOVIES_BY_GENRE,
  GET_MOVIES_BY_GENRE_ERROR,
  GET_DETAIL_MOVIES,
  GET_DETAIL_MOVIES_ERROR,
  SEARCH_MOVIES,
  SEARCH_MOVIES_ERROR,
  GET_GENRE_SET_LOADING,
  GET_DETAIL_SET_LOADING
} from '../constants';

const list = [GET_MOVIES_BY_GENRE, GET_DETAIL_MOVIES, SEARCH_MOVIES];
const errors = [
  GET_MOVIES_BY_GENRE_ERROR,
  GET_DETAIL_MOVIES_ERROR,
  SEARCH_MOVIES_ERROR
];

const initialState = {
  list: {
    [GET_DETAIL_MOVIES]: null,
    [GET_MOVIES_BY_GENRE]: null,
    [SEARCH_MOVIES]: null
  },
  loading: {
    [GET_DETAIL_MOVIES]: true,
    [GET_MOVIES_BY_GENRE]: true,
    [SEARCH_MOVIES]: true
  },
  errors: {
    [GET_DETAIL_MOVIES_ERROR]: null,
    [GET_MOVIES_BY_GENRE_ERROR]: null,
    [SEARCH_MOVIES_ERROR]: null
  }
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  var item, error;

  if (list.indexOf(type) !== -1) {
    item = type;
  }

  if (errors.indexOf(type) !== -1) {
    error = type;
  }

  switch (type) {
    case item:
      return {
        ...state,
        list: { ...state.list, [item]: payload },
        loading: {
          ...state.loading,
          [item]: false
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

    case error:
      return {
        ...state,
        errors: {
          ...state.errors,
          [error]: payload
        }
      };

    default:
      return state;
  }
}
