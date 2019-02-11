import { EnthusiasmAction } from '../actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../actions';

export function enthusiasmLevel(state: number = 1, action: EnthusiasmAction) {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return state + 1;
    case DECREMENT_ENTHUSIASM:
      return state - 1;
    default:
      return state;
  }
  return state;
}
