import {CLOSE_MENU, OPEN_MENU, TOGGLE_MENU} from "../actions/menuActions";
import {AnyAction} from "redux";

export interface MenuState {
  isOpen: boolean
}

const menuReducer = (state: MenuState = {isOpen: false}, action: AnyAction) => {
  switch (action.type) {
    case CLOSE_MENU:
      return {...state, isOpen: false};
    case OPEN_MENU:
      return {...state, isOpen: true};
    case TOGGLE_MENU:
      return {...state, isOpen: !state.isOpen};
    default:
      return {...state};
  }
};

export default menuReducer;
