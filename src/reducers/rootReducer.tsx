import { combineReducers } from "redux"
import {RootState } from "../store/storeState"
import feedReducer from "./feed.reducer"
import feedsReducer from "./feeds.reducer"

const rootReducer = combineReducers<RootState>({
    feeds:feedReducer,
    feed:feedsReducer
})
export default rootReducer;