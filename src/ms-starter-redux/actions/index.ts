export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export const COUNT_INCREMENT = 'COUNT_INCREMENT';

export type EnthusiasmAction = {
  type: 'INCREMENT_ENTHUSIASM' | 'DECREMENT_ENTHUSIASM' | 'COUNT_INCREMENT';
};

export function incrementEnthusiasm() {
  return {
    type: INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm() {
  return {
    type: DECREMENT_ENTHUSIASM
  };
}

export function countIncrement() {
  return {
    type: COUNT_INCREMENT
  };
}
