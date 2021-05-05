import menuReducer from "./menuReducer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import sidebarRightReducer from "./sidebarRightReducer";

const rootReducer = combineReducers({
  SidebarLeftComponent: menuReducer,
  UserObject: userReducer,
  SidebarRightComponent: sidebarRightReducer,
});

export default rootReducer;
