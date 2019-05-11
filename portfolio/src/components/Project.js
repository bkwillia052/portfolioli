import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  state = {
    hovering: false
  };

  toggleHovering = () => {
    this.setState({
      hovering: !this.state.hovering
    });
  };
  render() {
    let { stack } = this.props;
    return (
      <div className="outer">
        <div className="container--proj">
          <div className="stack">
            TECH STACK |
            {stack.map(tech => (
              <span className={`${tech[1]}`}> {tech[0]} </span>
            ))}
          </div>
          <div className="proj-img">
            <img src={this.props.imgSrc} alt="" />
            <div
              className={`proj-img--hover ${
                this.state.hovering ? "display" : ""
              }`}
            >
              <div className="proj-descr">{this.props.descr}</div>
              <div className="visit">Click Now To Visit</div>
            </div>
          </div>
          <div className="container--proj-name">
            <div
              className="proj-name"
              onMouseOver={this.toggleHovering}
              onMouseOut={this.toggleHovering}
            >
              <a href={`${this.props.url}`} target="_blank">
                {this.props.name}
              </a>
            </div>
          </div>
        </div>

        <div className="container--proj-role">
          <div className="proj-role">{this.props.descr}</div>
        </div>
      </div>
    );
  }
}

export default Project;
