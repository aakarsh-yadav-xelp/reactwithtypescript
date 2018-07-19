import * as React from "react";
import { hot } from 'react-hot-loader'
export interface AppProps {
  compiler: string;
  framework: string;
}
class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <h1>
        Hellow from in {this.props.compiler} and {this.props.framework}.
      </h1>
    );
  }
}
export default hot(module)(App);