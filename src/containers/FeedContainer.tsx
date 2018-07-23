import {connect } from "react-redux"
import {withRouter} from "react-router-dom"
import {bindActionCreators, Dispatch} from "redux"
import StoreState from "../store/storeState"
import FeedComponent from "../components/FeedComponent" 

function mapStateToProps(state:StoreState){
    return {
        state
    }
}
function mapDispatchToProps(dispatch:Dispatch<StoreState>){
    return {
        getFeed:bindActionCreators(()=>{return null},dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FeedComponent))
