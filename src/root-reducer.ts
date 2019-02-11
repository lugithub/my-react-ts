import { combineReducers } from 'redux';

import { enthusiasmLevel } from './ms-starter-redux';

export type RootState = {
  enthusiasmLevel: number;
};

export const rootReducer = combineReducers({
  enthusiasmLevel
});
