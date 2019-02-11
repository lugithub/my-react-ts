import { createStore, compose } from "redux";

import { rootReducer } from "./root-reducer";

export default function configureStore() {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(rootReducer, composeEnhancers());
  return store;
}
