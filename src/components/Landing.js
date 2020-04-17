import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { connect } from "react-redux";
import FirstInfo from "./FirstInfo";
import Footer from "../components/Footer";

class Landing extends Component {
  // scrollbar = () => {
  //   const progress = document.getElementById("progressBar");
  //   const totalHeight = document.body.scrollHeight - window.innerHeight;
  //   window.onscroll = function () {
  //     const progressHeight = (window.pageYOffset / totalHeight) * 100;
  //     progress.style.height = progressHeight + "%";
  //   };
  // };
  render() {
    // this.scrollbar();

    return (
      <div>
        <FirstInfo></FirstInfo>
        <div id="progressBar"></div>
        <div id="scrollPath"></div>

        <div className="home-sky">
          <div className="home-channel home-channel--first">
            <h2 className="home-channel__title">
              <a href="">About Me</a>
            </h2>
          </div>
          <div className="home-channel home-channel--second">
            <h2 className="home-channel__title">
              <a href="">Projects</a>
            </h2>
          </div>
          <div className="home-channel home-channel--third">
            <h2 className="home-channel__title">
              <a href="">SomethingMore?</a>
            </h2>
          </div>
          <div className="home-channel home-channel--fourth">
            <h2 className="home-channel__title">
              <a href="">ContactForm?</a>
            </h2>
          </div>
          <div className="home-logo">
            <img src="" alt="" />
          </div>
        </div>
        <div className="home-grid">
          <div class="home-grid">
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
          </div>
        </div>

        {/* <FirstInfo></FirstInfo> */}
        <React.Fragment>
          <Footer></Footer>
        </React.Fragment>
      </div>
    );
  }
}
export default Landing;
