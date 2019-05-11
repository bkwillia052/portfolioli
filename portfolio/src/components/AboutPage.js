import React, { Component } from "react";
import "./AboutPage.css";

class AboutPage extends Component {
  state = {};

  render() {
    let { stack } = this.props;
    return (
      <div className="container--projects">
        <div className="projects top-square" />
        <div className="projects bottom-square" />
        <div className="shape--triangle-r about" />
      </div>
    );
  }
}

export default AboutPage;
