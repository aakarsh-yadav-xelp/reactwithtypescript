import * as keys from "../actions/actionTypeKeys";

export default interface StoreState {
  readonly type: keys.ActionTypeKeys;
  readonly payload?: any;
  readonly loading?:boolean
}
export interface Feed {
    id:number;
    userId:number;
    title:string;
    body:string;
    imageUrl?:string
}
// interface FeedModel {
//     feeds:Feed[];
//     type:any;
//     loading:boolean
// }
export interface RootState {
    feeds:any,
    feed:any
}