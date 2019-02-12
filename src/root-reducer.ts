import { combineReducers } from 'redux';

import { enthusiasmLevel, counter } from './ms-starter-redux';

export type RootState = {
  enthusiasmLevel: number;
  counter: number;
};

export const rootReducer = combineReducers({
  enthusiasmLevel,
  counter
});
