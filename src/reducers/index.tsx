import { combineReducers } from "redux";
import {RootState} from "./state";
import  feeds  from "./feed.reducers";
import { routerReducer, RouterState } from "react-router-redux";
export { RootState,feeds, RouterState };
export const rootReducer = combineReducers<RootState>({
  feeds: feeds as any,
  router: routerReducer as any
});
