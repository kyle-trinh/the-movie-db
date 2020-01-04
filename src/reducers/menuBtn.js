import { TOGGLE_MENU } from '../constants';

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

    default:
      return state;
  }
}
