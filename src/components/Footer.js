import React from "react";
import windowsflag from "../media/Computer_icons/windowsflag.ico";
import homebutton from "../media/Computer_icons/carpeta.ico";
import nosound from "../media/Computer_icons/nosound.png";

export default function Footer() {
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
        <div className="watch">14:50</div>
      </div>
    </div>
  );
}
