import menuReducer from './menuReducer'
import {combineReducers} from 'redux'
import userReducer from "./userReducer";
import sidebarRightReducer from "./sidebarRightReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer,
  SidebarRight: sidebarRightReducer
});

export default rootReducer;
