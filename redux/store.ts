import { createStore, Store } from "redux";
import { Context, createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducer";
import { MenuState } from "./reducers/menuReducer";
import storeSynchronize from "redux-localstore";

let store = createStore(rootReducer);
const makeStore = (context: Context) => store;

// export an assembled wrapper
// @ts-ignore
export const wrapper = createWrapper<Store<MenuState>>(makeStore, {
  debug: true,
});
storeSynchronize(store);
