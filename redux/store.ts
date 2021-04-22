import {createStore, AnyAction, Store} from 'redux';
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import rootReducer from './reducers/rootReducer';
import {MenuState} from "./reducers/menuReducer";

const makeStore = (context: Context) => createStore(rootReducer);

// export an assembled wrapper
// @ts-ignore
export const wrapper = createWrapper<Store<MenuState>>(makeStore, {debug: true});
