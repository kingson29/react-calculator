import React, { Component } from "react";
import Buttons from "./buttons";
import Displayer from "./displayer";

class Calculator extends Component {
  state = {
    symbols: [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", 0, ".", "=", "/"]
  };
  render() {
    const { symbols } = this.state;
    return (
      <div className="calculator">
        <Displayer />
        <Buttons symbols={symbols} />
      </div>
    );
  }
}

export default Calculator;
