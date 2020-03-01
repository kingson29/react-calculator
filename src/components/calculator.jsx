import React, { Component } from "react";
import Buttons from "./buttons";
import Displayer from "./displayer";

class Calculator extends Component {
  state = {
    symbols: [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", 0, ".", "=", "/"]
  };

  handleClick = action => {
    if (typeof action === "number") console.log("number key");
    if (["+", "-", "x", "/"].includes(action)) console.log("operator key");
    if (action === "=") console.log("equal key");
    if (action === ".") console.log("decimal key");
  };

  render() {
    const { symbols } = this.state;
    return (
      <div className="calculator">
        <Displayer />
        <Buttons symbols={symbols} onAction={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
