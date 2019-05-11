import "./ProjectsPage.css";
import React, { Component } from "react";
import Project from "./Project";

const tech = {
  ReactJS: ["ReactJS", "red"],
  Node: ["Node", "green"],
  AWS: ["AWS", "orange"],
  Stripe: ["Stripe", "purple"],
  FormSpree: ["FormSpree", "purple"]
};
let projects = [
  {
    name: "vBeloved",
    descr: `vBeloved is a wedding site dedication todoing things and moving
            things and making mrried people that aren't yet married happy.`,
    stack: [tech.ReactJS, tech.Node, tech.AWS, tech.Stripe],
    imgSrc: require("../assets/vbeloved-sc.png"),
    url: "http://www.vbeloved.com",
    role: ""
  },
  {
    name: "PMC Advisors",
    descr: `PMC Advisors is a static website made with React that incorporates Formspree.io and animations(in progress!).`,
    stack: [tech.ReactJS, tech.FormSpree],
    imgSrc: require("../assets/pmc-sc.png"),
    url: "http://www.pmc-demo.netlify.com",
    role: ""
  },
  {
    name: "PMC AdvOOO",
    descr: `PMC Advisors is a static website made with React that incorporates Formspree.io and animations(in progress!).`,
    stack: [tech.ReactJS, tech.FormSpree],
    imgSrc: require("../assets/pmc-sc.png"),
    url: "http://www.pmc-demo.netlify.com",
    role: ""
  }
];

/* projects = [projects[0], projects[2]]; */

class ProjectsPage extends Component {
  state = {};
  render() {
    return (
      <div className="container--projects">
        <div className="container--proj-profiles">
          {projects.map(proj => (
            <Project
              name={proj.name}
              descr={proj.descr}
              stack={proj.stack}
              imgSrc={proj.imgSrc}
              url={proj.url}
            />
          ))}
        </div>

        <div className="projects top-square" />
        <div className="projects bottom-square" />
        <div className="projects mid-circle" />
      </div>
    );
  }
}

export default ProjectsPage;
