import React, { Component } from "react";

const Button = props => {
  return (
    <div className="calbutton" onClick={props.onAction}>
      {props.symbol}
    </div>
  );
};

export default Button;
