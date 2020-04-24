import React from "react";
import Typical from "react-typical";

export default function FirstInfo() {
  return (
    <div>
      <div className="aboutMe">
        <h1> Hey, my name is Alba</h1>{" "}
        <p>
          I'm{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "a software developer 👩‍💻",
              1000,
              "a drummer 🥁",
              1000,
              "a tattoo artist 🔥",
              1000,
            ]}
          ></Typical>
        </p>
      </div>
    </div>
  );
}
