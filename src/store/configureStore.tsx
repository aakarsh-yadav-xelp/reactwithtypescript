import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { RootState } from "./storeState";
export default function configureStore() {
  return createStore<RootState,any,any,any>(rootReducer, applyMiddleware(thunkMiddleware));
}
