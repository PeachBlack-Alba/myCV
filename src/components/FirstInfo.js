import React from "react";
import Typical from "react-typical";

export default function FirstInfo() {
  return (
    <div className="aboutMe">
      <div id="about" className="innerContainer infoFlex con2">
        <h1> Hey, my name is Alba</h1>{" "}
        <p>
          I'm{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "your new software developer 👩‍💻",
              1000,
              "a drummer 🥁",
              1000,
              "a tattoo artist 🔥",
              1000
            ]}
          ></Typical>
        </p>
        <p>Add text here</p>
      </div>
    </div>
  );
}
