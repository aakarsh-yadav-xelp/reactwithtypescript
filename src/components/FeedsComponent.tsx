import * as React from "react"
import RouteComponentProps from "react-router-dom"
import {Dispatch } from "redux";
import StoreState from "store/storeState";

interface IFeedProps extends RouteComponentProps<any>{
    readonly getFeed : ()=>(dispatch: Dispatch<StoreState>)=>Promise<void>
}

export default class FeedsComponent extends React.Component<IFeedProps>{
componentDidMount(){
    this.props.getFeeds()
}
    public render(){
        console.log(this.props)
        return <div >From Feeds</div>
    }
}