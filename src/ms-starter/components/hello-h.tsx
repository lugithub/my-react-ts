import React, { useState } from "react";

import { HelloProps, getExclamationMarks } from "./hello";

export function Helloh({ name }: HelloProps) {
  const [{ enthusiasmLevel }, setState] = useState({
    enthusiasmLevel: 1
  });

  function handleClick() {
    setState(prevS => {
      return {
        enthusiasmLevel: prevS.enthusiasmLevel + 1
      };
    });
  }
  return (
    <div className="hello" onClick={handleClick}>
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}
