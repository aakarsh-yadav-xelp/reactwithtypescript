import { combineReducers } from "redux"
import {RootState } from "../store/storeState"
import feedReducer from "./feed.reducer"

const rootReducer = combineReducers<RootState>({
    feeds:feedReducer
})
export default rootReducer;