import { RouterState } from "react-router-redux";
import { FeedModel } from "../models";
export interface RootState {
  feeds: RootState.feeds;
  router: RootState;
}
export namespace RootState {
  export type FeedsState = FeedModel[];
}
