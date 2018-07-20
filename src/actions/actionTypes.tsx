import {
    getFeedRequestAction,
    getFeedSuccessAction,
    getFeedFailureAction
} from "./feed.actions"
type ActionTypes = 
| getFeedRequestAction
| getFeedSuccessAction
| getFeedFailureAction;
export default ActionTypes