import keys from "./actionTypeKeys"
export interface getFeedRequestAction {
    readonly type: keys.GET_FEED_REQUEST
}
export interface getFeedSuccessAction {
    readonly type : keys.GET_FEED_SUCCESS;
    readonly payload: any
}
export interface getFeedFailureAction {
    readonly type : keys.GET_FEED_ERROR;
    readonly payload : {
       readonly error: Error 
    }
}