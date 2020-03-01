import React, { Component } from "react";
import Button from "./button";

class Buttons extends Component {
  render() {
    const { symbols, onAction, onTurnOn, onTurnOff, onAC } = this.props;
    return (
      <React.Fragment>
        <div className="control-settings">
          <div className="control-button" onClick={onTurnOn}>
            ON
          </div>
          <div className="control-button" onClick={onTurnOff}>
            OFF
          </div>
          <div className="control-button" onClick={onAC}>
            AC
          </div>
        </div>
        <div className="button-area">
          {symbols.map(s => (
            <Button key={s} symbol={s} onAction={() => onAction(s)} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Buttons;
