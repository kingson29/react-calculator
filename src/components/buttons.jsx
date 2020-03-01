import React, { Component } from "react";
import Button from "./button";

class Buttons extends Component {
  render() {
    const { symbols, onAction } = this.props;
    return (
      <div className="button-area">
        {symbols.map(s => (
          <Button key={s} symbol={s} onAction={() => onAction(s)} />
        ))}
      </div>
    );
  }
}

export default Buttons;
