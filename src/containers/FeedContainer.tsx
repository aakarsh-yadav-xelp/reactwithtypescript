import {connect } from "react-redux"
import {withRouter} from "react-router-dom"
import {bindActionCreators, Dispatch} from "redux"
import StoreState from "../store/storeState"
import FeedComponent from "../components/FeedComponent" 
import { getFeedComponent } from "../actions/feed.action";

function mapStateToProps(state:StoreState){
    return {
        state:state.feed
    }
}
function mapDispatchToProps(dispatch:Dispatch){
    return {
        getFeed:(id:number)=>bindActionCreators(()=>getFeedComponent(id),dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FeedComponent))
