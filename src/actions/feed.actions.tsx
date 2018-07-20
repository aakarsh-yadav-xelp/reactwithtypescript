import { Dispatch } from "redux";
import { Feed } from "../models";
import keys from "./actionTypeKeys";
import {
  getFeedRequestAction,
  getFeedSuccessAction,
  getFeedFailureAction
} from "./feed.interface";
import StoreState from "../models/feeds.store";

function getFeedRequest(): getFeedRequestAction {
  return {
    type: keys.GET_FEED_REQUEST
  };
}

function getFeedSuccess(feeds: Feed[]): getFeedSuccessAction {
  return {
    type: keys.GET_FEED_SUCCESS,
    payload: feeds
  };
}

function getFeedFailure(error: Error): getFeedFailureAction {
  return {
    type: keys.GET_FEED_ERROR,
    payload: { error }
  };
}

export function getFeed(): (dispatch: Dispatch<StoreState>) => Promise<void> {
  return async (dispatch: Dispatch<StoreState>) => {
    dispatch(getFeedRequest());
    try {
      const feed: any = [{}, {}];
      // await call make here for api
      dispatch(getFeedSuccess(feed));
    } catch (e) {
      dispatch(getFeedFailure(e.message));
    }
  };
}
