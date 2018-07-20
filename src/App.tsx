import * as React from "react";
import { hot } from 'react-hot-loader'
import FeedsContainer from "./containers/FeedsContainer"

class App extends React.Component<any, {}> {
  render() {
    return (
      <h1>
        <FeedsContainer />
        Hellow from in 
      </h1>
    );
  }
}
export default hot(module)(App);