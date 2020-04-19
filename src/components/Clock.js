import React, { Component } from "react";

export default class Clock extends Component {
  render() {
    const time = new Date().toLocaleString();

    return <div>{time}</div>;
  }
}
