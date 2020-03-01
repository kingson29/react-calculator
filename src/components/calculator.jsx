import React, { Component } from "react";
import Buttons from "./buttons";
import Displayer from "./displayer";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <div className="calculator">
        <Displayer />
        <Buttons />
      </div>
    );
  }
}

export default Calculator;
