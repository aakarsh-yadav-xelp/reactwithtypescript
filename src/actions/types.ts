import { Action } from "redux";
import * as keys from "./actionTypeKeys";

export interface getFeedRequestAction extends Action {
  type: keys.ActionTypeKeys.GET_FEED_REQUEST;
}

export interface getFeedSuccessAction extends Action {
  type: keys.ActionTypeKeys.GET_FEED_SUCCESS;
  payload: any;
}

export interface getFeedFailureAction extends Action {
  type: keys.ActionTypeKeys.GET_FEED_FAILURE;
  error: any;
}

// Down here, we'll create a discriminated union type of all actions which will be used for our reducer.
export type FeedActions =
  | getFeedRequestAction
  | getFeedSuccessAction
  | getFeedFailureAction;
