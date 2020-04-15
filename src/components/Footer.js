import React from "react";
import windowsflag from "../media/Computer_icons/windowsflag.ico";
import homebutton from "../media/Computer_icons";

export default function Footer() {
  return (
    <div className="navBarWrapper">
      <div className="startHomeWrapper">
        <div className="startButton">
          <img src={windowsflag} alt="windowsflag" />
          <div className="start">Start</div>
        </div>
        <div className="homeButton">
          <div>Home</div>
        </div>
      </div>
      <div className="soundTimeWrapper">
        <img></img>
        <div className="watch">14:50</div>
      </div>
    </div>
  );
}
