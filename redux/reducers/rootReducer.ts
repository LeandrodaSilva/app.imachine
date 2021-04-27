import menuReducer from './menuReducer'
import {combineReducers} from 'redux'
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  user: userReducer
});

export default rootReducer;
