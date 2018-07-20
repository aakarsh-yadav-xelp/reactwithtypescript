import {
    getFeedRequestAction,
    getFeedSuccessAction,
    getFeedFailureAction
} from "./action.interface"
type ActionTypes = 
| getFeedRequestAction
| getFeedSuccessAction
| getFeedFailureAction;
export default ActionTypes