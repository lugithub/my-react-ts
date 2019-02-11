import React from 'react';

import { HelloProps, getExclamationMarks } from './hello';

type HelloS = {
  enthusiasmLevel: number;
};

export class Helloc extends React.Component<HelloProps, HelloS> {
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      enthusiasmLevel: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevS => {
      return {
        enthusiasmLevel: prevS.enthusiasmLevel + 1
      };
    });
  }
  render() {
    const { name } = this.props;
    const { enthusiasmLevel } = this.state;

    // if (enthusiasmLevel <= 0) {
    //   throw new Error("You could be a little more enthusiastic. :D");
    // }

    return (
      <div className="hello" onClick={this.handleClick}>
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
        </div>
      </div>
    );
  }
}
