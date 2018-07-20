import {
    getFeedRequest,
    getFeedSuccess,
    getFeedFailure
} from "./feed.interface"
type ActionTypes = 
| getFeedRequest
| getFeedSuccess
| getFeedFailure;
export default ActionTypes;