import { Store, createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { History } from "history";
import { RootState, rootReducer } from "src/reducers";
import * as api from "src/lib";

declare var module: any

export function configureStore(
  history: History,
  initialState?: RootState
): Store<RootState> {
  let middleware = applyMiddleware(api, routerMiddleware(history));
  const store = createStore(
    rootReducer as any,
    initialState as any,
    middleware
  ) as Store<RootState>;
  if (module.hot) {
    module.hot.accept("src/reducers", () => {
      const nextRouter = require("src/reducers");
      store.replaceReducer(nextRouter);
    });
  }
  return store;
}
