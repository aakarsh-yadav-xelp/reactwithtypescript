import { Feed } from ".";
import ActionTypeKeys from "../actions/actionTypeKeys"
export default interface StoreState {
    readonly feeds :Feed[];
}