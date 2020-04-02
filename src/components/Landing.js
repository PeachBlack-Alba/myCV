import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import { connect } from "react-redux";
import Footer from "../components/Footer";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Say something</h1>
        <Footer></Footer>
      </div>
    );
  }
}
