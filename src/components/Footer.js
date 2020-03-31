import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div style={{ marginLeft: "1%", alignSelf: "center" }}>
        <p>2020 by Alba Torres Rodríguez</p>
      </div>
      <div className="iconWrapper">
        <div>
          <a href="https://www.linkedin.com/in/marcus-weissohn-eede/">
            <img
              alt="linkedIn"
              src="https://res.cloudinary.com/munnotubbel/image/upload/v1578755685/MyPortfolio/linkedin_psphfy.png"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/Munnotubbel">
            <img
              alt="github"
              src="https://res.cloudinary.com/munnotubbel/image/upload/v1578755676/MyPortfolio/githubIcon_mbuq4c.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
