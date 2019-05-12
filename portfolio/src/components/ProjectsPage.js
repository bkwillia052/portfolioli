import "./ProjectsPage.css";
import React, { Component } from "react";
import Project from "./Project";

const tech = {
  ReactJS: ["ReactJS", "red"],
  Node: ["Node", "green"],
  AWS: ["AWS", "orange"],
  Stripe: ["Stripe", "purple"],
  FormSpree: ["FormSpree", "purple"],
  AWSPolly: ["AWS Polly", "purple"],
  AWSS3: ["AWS S3", "orange"]
};
let projects = [
  {
    name: "vBeloved",
    descr: `vBeloved is a wedding planning site that I worked on with a team of 4 during a 5 week sprint. I was the main Backend Architect and used Express and SQLite w/ Knex among other popular libraries to complete our desired functionality. We hosted our DB on Amazon's RDS service(this was my first of many dives into AWS!). I also worked on front-end Authentication, Billing, Settings, and Invitation UI components.`,
    stack: [tech.ReactJS, tech.Node, tech.AWS, tech.Stripe],
    imgSrc: require("../assets/vbeloved-sc.png"),
    url: "http://www.vbeloved.com",
    role: ""
  },
  {
    name: "PMC Advisors",
    descr: `PMC Advisors (in progress!) is a static website made with React that incorporates Formspree.io for email inquiries.`,
    stack: [tech.ReactJS, tech.FormSpree],
    imgSrc: require("../assets/pmc-sc.png"),
    url: "http://www.pmc-demo.netlify.com",
    role: ""
  },
  {
    name: "Mnemozen",
    descr: `Mnemozen (in progress!) is an original language learning app that uses AWS Polly & spaced repetition to teach learners the top 1000 words of a given langauge at an accelerated pace.  `,
    stack: [tech.ReactJS, tech.AWSPolly, tech.AWSS3],
    imgSrc: require("../assets/mnemozen-sc.png"),
    url: "http://www.mnemozen.netlify.com",
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
