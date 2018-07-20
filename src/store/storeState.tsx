import * as keys from "../actions/actionTypeKeys";

export default interface StoreState {
  readonly type: keys.ActionTypeKeys;
  readonly payload?: any;
  readonly loading?:boolean
}
// interface Feed {
//     id:string;
//     title:string;
//     description:string;
//     imageUrl:string
// }
// interface FeedModel {
//     feeds:Feed[];
//     type:any;
//     loading:boolean
// }
export interface RootState {
    feeds:any
}