import { connect  } from "react-redux"
import {withRouter} from"react-router-dom"
import {bindActionCreators ,Dispatch} from "redux"
import StoreState from "../store/storeState";
import { getFeeds } from "../actions/feeds.action";
import FeedsComponent from "../components/FeedsComponent";

function mapStateToProps(state:StoreState){
    return {
        feeds:state
    }
}
function mapDispatchToProps(dispatch : Dispatch<StoreState>){
    return {
        getFeeds:bindActionCreators(getFeeds,dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FeedsComponent)) as React.ComponentClass<{}>