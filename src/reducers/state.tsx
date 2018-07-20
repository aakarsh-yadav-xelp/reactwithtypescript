import { RouterState } from "react-router-redux";
import { FeedModel } from "../models";
export interface RootState {
  feeds: FeedModel;
  router: RouterState;
}
export namespace RootState {
  export type feeds = FeedModel;
}
