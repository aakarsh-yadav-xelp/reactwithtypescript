import { Reducer } from 'redux';
import { FeedActions } from '../actions/types';
import * as keys from "../actions/actionTypeKeys"

export interface rootState {
    feeds:any,
    loading: boolean;
  }
export const initialState: rootState = {
    feeds:[],
    loading: false
  };

const feedsReducer: Reducer<rootState> = (state: rootState = initialState, action) => {

  switch ((action as FeedActions).type) {
    case keys.ActionTypeKeys.GET_FEED_REQUEST:
    return Object.assign({}, state, {
        loading: true
      });
    case keys.ActionTypeKeys.GET_FEED_SUCCESS:
    return Object.assign({}, state, {
        feeds: action.payload,
        loading: false
      });
    case keys.ActionTypeKeys.GET_FEED_FAILURE:
    return Object.assign({}, state, {
        error: action.payload.error,
        loading: false
      });
    default:
      return state;
  }
};

export default feedsReducer;