import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import Footer from "../components/Footer";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Footer></Footer>
      </div>
    );
  }
}
