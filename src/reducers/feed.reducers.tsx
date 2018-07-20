import {handleActions} from "redux-actions";
import {RootState} from "./state";
import {feedActions } from "../"
import {FeedModel } from "models"

const initialState : RootState.feeds=[];
const feeds = feedActions<RootState.feeds,FeedModel>(
    {
        [feedActions.Type.GET_FEED_REQUEST]:(state,action)=>{
            return Object.assign({},state,{
                loading:true
            })
        },
        [feedActions.Type.GET_FEED_SUCCESS]:(state,action)=>{
            return Object.assign({},state,{
                loading:false,
                feeds:action.feeds
            })
        },
        [feedActions.Type.GET_FEED_ERROR]:(state,action)=>{
            return Object.assign({},state,{
                loading:false
            })
        }
    },
    initialState
)
export  default feeds;