import { ActionCreator } from 'redux';
import {
  getFeedRequestAction,
  getFeedSuccessAction,
  getFeedFailureAction
} from './types';
import * as keys from "./actionTypeKeys"
import StoreState from "../store/storeState";
import { Dispatch } from "redux";
export const API_URL_PATH : string = "https://live-api-mocker.herokuapp.com/"

export const getFeedRequest: ActionCreator<getFeedRequestAction> = () => ({
  type:  keys.ActionTypeKeys.GET_FEED_REQUEST,
  
});

export const getFeedSuccess: ActionCreator<getFeedSuccessAction> =(feeds: any) => ({
  type:  keys.ActionTypeKeys.GET_FEED_SUCCESS,
  payload: feeds,
  
});

export const getFeedFailure: ActionCreator<getFeedFailureAction> = (error:any) => ({
  type:  keys.ActionTypeKeys.GET_FEED_FAILURE,
  error:error
});

export function getFeeds(): (dispatch: Dispatch<StoreState>) => Promise<void> {
  return async (dispatch: Dispatch<StoreState>) => {
    dispatch(getFeedRequest());
    try {
      //await call here
      const feeds: any = await fetch(
        `${API_URL_PATH}feeds`,
        { method: "get" }
      );
      const result: any = await feeds.json();
      dispatch(getFeedSuccess(result));
    } catch (e) {
      dispatch(getFeedFailure(e.message));
    }
  };
}
