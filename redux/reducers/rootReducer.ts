import menuReducer from './menuReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  menu: menuReducer
});

export default rootReducer;
