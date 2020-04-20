import React, { Component } from "react";
import windowsflag from "../media/Computer_icons/windowsflag.ico";
import homebutton from "../media/Computer_icons/carpeta.ico";
import nosound from "../media/Computer_icons/nosound.png";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString(),
    });
  }
  render() {
    return (
      <div className="navBarWrapper">
        <div className="startHomeWrapper">
          <div className="startButton">
            <img src={windowsflag} alt="windowsflag" />
            <div className="start">Start</div>
          </div>
          <div className="homeButton">
            <img src={homebutton} alt="carpetaicon" />

            <div className="home">Home</div>
          </div>
        </div>
        <div className="soundTimeWrapper">
          <img src={nosound} alt="nosound" />
          {this.state.time}
        </div>
      </div>
    );
  }
}
