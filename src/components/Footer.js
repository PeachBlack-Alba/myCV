import React from "react";
import windowsflag from "../media/Computer icons/windowsflag.ico";

export default function Footer() {
  return (
    <div className="navBarWrapper">
      <div className="startHomeWrapper">
        <div className="startButton">
          <img src={windowsflag} alt="windowsflag" />
          <div>Start</div>
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
