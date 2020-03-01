import React, { Component } from "react";

class Displayer extends Component {
  state = {};
  render() {
    return <div className="displayer">{this.props.displayValue}</div>;
  }
}

export default Displayer;
