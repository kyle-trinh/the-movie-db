import {
  GET_DETAIL_TV,
  GET_NOW_PLAYING_TV,
  GET_POPULAR_TV,
  GET_TOP_RATED_TV
} from '../constants';

const tvLists = [
  GET_DETAIL_TV,
  GET_NOW_PLAYING_TV,
  GET_POPULAR_TV,
  GET_TOP_RATED_TV
];

const initialState = {
  tvShows: {
    [GET_DETAIL_TV]: null,
    [GET_NOW_PLAYING_TV]: null,
    [GET_POPULAR_TV]: null,
    [GET_TOP_RATED_TV]: null
  },
  loading: {
    [GET_DETAIL_TV]: true,
    [GET_NOW_PLAYING_TV]: true,
    [GET_POPULAR_TV]: true,
    [GET_TOP_RATED_TV]: true
  },
  errors: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  var tvList;

  if (tvLists.indexOf(type) !== -1) {
    tvList = type;
  }

  switch (type) {
    case tvList:
      return {
        ...state,
        tvShows: {
          ...state.tvShows,
          [tvList]: payload
        },
        loading: {
          ...state.loading,
          [tvList]: false
        }
      };
    default:
      return state;
  }
}
