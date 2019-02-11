import React from "react";
import { connect } from "react-redux";

import { getExclamationMarks } from "../../ms-starter";
import { RootState } from "../../";
import { incrementEnthusiasm } from "../actions";

export type HellopProps = {
  name: string;
  enthusiasmLevel: number;
  incrementEnthusiasm: () => void;
};

export function Hellop({
  name,
  enthusiasmLevel,
  incrementEnthusiasm
}: HellopProps) {
  return (
    <div className="hello" onClick={incrementEnthusiasm}>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel || 1)}
      </div>
    </div>
  );
}

const mapState = ({ enthusiasmLevel }: RootState) => ({ enthusiasmLevel });
const mapDispath = {
  incrementEnthusiasm
};

export const Hellog = connect(
  mapState,
  mapDispath
)(Hellop);
