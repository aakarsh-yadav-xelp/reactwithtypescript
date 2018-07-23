import * as React from "react";
import { hot } from 'react-hot-loader'
import FeedsContainer from "./containers/FeedsContainer"
import * as styles from "./App.css"
class App extends React.Component<any, {}> {
  render() {
    return (
      <div className={styles.base}>
        <FeedsContainer />
        </div>
    );
  }
}
export default hot(module)(App);