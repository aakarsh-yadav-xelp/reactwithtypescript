import * as React from "react";
import { Dispatch } from "redux";
interface IProps {
  getFeed:(id:number)=>(dispatch:Dispatch)=>Promise<void>;
  feedComponent:any;
  history:any;
  match:any
}
export default class FeedComponent extends React.Component<IProps, {}> {
  componentDidMount(){
    console.log(this.props)
  this.props.getFeed(parseInt(this.props.match.params.feedId,10))
  }
  public render() {
      //work is going on here 
      console.log(this.props)
    return <div> name </div>;
  }
}
