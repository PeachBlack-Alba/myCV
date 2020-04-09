import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { connect } from "react-redux";
import FirstInfo from "./FirstInfo";
import Footer from "../components/Footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="home-sky">
          <div className="home-channel home-channel--first">
            <h2 className="home-channel__title">
              <a href="">Courses</a>
            </h2>
          </div>
          <div className="home-channel home-channel--second">
            <h2 class="home-channel__title">
              <a href="">Posts</a>
            </h2>
          </div>
          <div className="home-channel home-channel--third">
            <h2 class="home-channel__title">
              <a href="">Talks</a>
            </h2>
          </div>
          <div className="home-channel home-channel--fourth">
            <h2 class="home-channel__title">
              <a href="">Reading</a>
            </h2>
          </div>
          <div class="home-logo">
            <img src="" alt="" />
          </div>
        </div>
        <div className="home-grid">
          {/* <div class="home-grid">
            <div class="grid" aria-hidden="true">
              <div class="grid__horizon"></div>
              <div class="grid__deck">
                <div class="grid__grid-plane">
                  <div class="grid__grid">
                    <div class="grid__grid--vertical">
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                    </div>
                    <div class="grid__dots">
                      <div class="grid__dots__dot"></div>
                      <div class="grid__dots__dot"></div>
                      <div class="grid__dots__dot"></div>
                      <div class="grid__dots__dot"></div>
                      <div class="grid__dots__dot"></div>
                      <div class="grid__dots__dot"></div>
                      <div class="grid__dots__dot"></div>
                    </div>
                    <div class="grid__grid--horizontal">
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                      <div class="grid__grid__line"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <FirstInfo></FirstInfo>
        <Footer></Footer> */}
      </div>
    );
  }
}
export default Landing;
