import React, { Component } from "react";
import Button from "./button";

class Buttons extends Component {
  render() {
      const { symbols } = this.props;
    return (
      <div class="button-area">
          {symbols.map(s => <Button symbol={s} />)}
      </div>
    );
  }
}

export default Buttons;
