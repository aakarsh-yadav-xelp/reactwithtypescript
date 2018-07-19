import * as React from "react";
import {createStore,applyMiddleware} from "redux"
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader'
export interface AppProps {
  compiler: string;
  framework: string;
}
class App extends React.Component {
  render() {
    return (
      <h1>
        Hellow from i
      </h1>
    );
  }
}
export default hot(module)(App);