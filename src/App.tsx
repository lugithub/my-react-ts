import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Hello, Helloc, Helloh } from "./ms-starter";
import { Hellog } from "./ms-starter-redux";

type AppProp = {
  title: string;
};

class App extends Component<AppProp> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.props.title}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Hello name="foo" enthusiasmLevel={3} />
        <Helloc name="bar" />
        <Helloh name="hooks" />
        <Hellog name="redux" />
      </div>
    );
  }
}

export default App;
