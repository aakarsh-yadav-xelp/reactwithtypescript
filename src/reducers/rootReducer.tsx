import { combineReducers } from "redux"
import {RootState } from "../store/storeState"
import feedReducer from "./feed.reducer"
import newFeedReducer from "./feeds.reducer"

const rootReducer = combineReducers<RootState>({
    feeds:feedReducer,
    newFeeds:newFeedReducer
})
export default rootReducer;