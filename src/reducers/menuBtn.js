import { TOGGLE_MENU } from '../constants';
import { CLOSE_MENU } from '../constants/types';

const initialState = {
  closeMenu: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        closeMenu: !state.closeMenu
      };

    case CLOSE_MENU:
      return {
        ...state,
        closeMenu: true
      };

    default:
      return state;
  }
}
