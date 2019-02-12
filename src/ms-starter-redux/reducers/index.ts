import { EnthusiasmAction } from '../actions';
import {
  INCREMENT_ENTHUSIASM,
  DECREMENT_ENTHUSIASM,
  COUNT_INCREMENT
} from '../actions';

export function enthusiasmLevel(state: number = 1, action: EnthusiasmAction) {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return state + 1;
    case DECREMENT_ENTHUSIASM:
      return state - 1;

    case COUNT_INCREMENT:

    default:
      return state;
  }
}

export function counter(state: number = 0, action: EnthusiasmAction) {
  switch (action.type) {
    case COUNT_INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
