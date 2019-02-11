export const INCREMENT_ENTHUSIASM = "INCREMENT_ENTHUSIASM";
export const DECREMENT_ENTHUSIASM = "DECREMENT_ENTHUSIASM";

export type EnthusiasmAction = {
  type: "INCREMENT_ENTHUSIASM" | "DECREMENT_ENTHUSIASM";
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
