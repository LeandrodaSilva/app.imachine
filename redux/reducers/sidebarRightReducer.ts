import {CLOSE_MENU, OPEN_MENU} from "../actions/sidebarRightActions";
import {AnyAction} from "redux";

export interface SidebarRightState {
  isOpen: boolean
}

const sidebarRightReducer = (state: SidebarRightState = {
  isOpen: false
}, action: AnyAction) => {
  switch (action.type) {
    case CLOSE_MENU:
      return {...state, isOpen: false};
    case OPEN_MENU:
      return {...state, isOpen: true};
    default:
      return {...state};
  }
};

export default sidebarRightReducer;
