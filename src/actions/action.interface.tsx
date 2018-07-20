import * as keys from "./actionTypeKeys"
export interface getFeedRequestAction {
    readonly type : keys.ActionTypeKeys.GET_FEED_REQUEST
}
export interface getFeedSuccessAction {
    readonly type : keys.ActionTypeKeys.GET_FEED_SUCCESS;
    readonly payload : any
}
export interface getFeedFailureAction {
    readonly type : keys.ActionTypeKeys.GET_FEED_FAILURE;
    readonly payload :{
        readonly error : Error
    }
}