import * as React from "react";
import { hot } from 'react-hot-loader'
import FeedsContainer from "./containers/FeedsContainer"

class App extends React.Component<any, {}> {
  render() {
    return (
        <FeedsContainer />
    );
  }
}
export default hot(module)(App);