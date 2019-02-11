import { createStore } from "redux";

import { rootReducer } from "./root-reducer";

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
