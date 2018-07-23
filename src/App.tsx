import * as React from "react";
import { hot } from 'react-hot-loader'
import FeedsContainer from "./containers/FeedsContainer"
import FeedContainer from "./containers/FeedContainer"
import * as styles from "./App.css"
import { Route } from "react-router-dom"
 class App extends React.Component<any, {}> {
  render() {
    return (
      <div className={styles.base}>
       <Route exact path={"/"} render={FeedsContainer} />
       <Route path={`/feed/:feedId`} render={FeedContainer} />
        </div>
    );
  }
}
export default hot(module)(App);