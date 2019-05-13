import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

class App extends React.Component {
  state = {
    currentTab: "home"
  };

  switchTab = event => {
    event.persist();
    let page = event.target.attributes[0].nodeValue;

    this.setState({
      currentTab: page
    });

    let pageIndices = {
      about: 1,
      projects: 2,
      home: 0
    };
    this.parallax.scrollTo(pageIndices[page]);
  };
  render() {
    return (
      <div className="App">
        <Parallax
          pages={3}
          scrolling={false}
          horizontal
          ref={ref => (this.parallax = ref)}
        >
          <ParallaxLayer offset={0}>
            <HomePage scrollTo={() => this.parallax.scrollTo(2)} />
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            <AboutPage />
            <div className="container--about">
              <div className="container--about-main">
                <div className="container--about-descr">
                  {/* <div className="wavemoji">
                    <img src={require("./assets/blobwave.png")} alt="" />{" "}
                    <span className="hi">Hi!</span>
                  </div> */}
                  <div className="about-descr">
                    I'm Brian, a Full Stack developer with a deep, ever-growing
                    interest in cloud technology, languages (both computer and
                    human!), and impactful ideas that empower societies and the
                    individuals therein. I have a B.A. in International
                    Management and, prior to programming, worked in
                    transnational companies in both business development and
                    adminstrative capacities. I also speak Mandarin
                    Chinese(真的!)! <br />
                    <br />
                    In 2018, I took the next step to becoming a software
                    developer by joining{" "}
                    <a href="http://lambdaschool.com" target="_blank">
                      {" "}
                      Lambda School
                    </a>
                    , an innovative, immersive program with a project-based
                    curriculum in software engineering and computer science.
                    After successfully completing the program(!), I applied to
                    become a part-time Project Manager (a student mentor/TA
                    role) to work with a small group of students as they study
                    algorithms and computer architecture with the aid of Python
                    and C! It's been an amazing journey.
                    <br />
                    <br />
                    I'm always interested in learning more about innovative
                    projects and companies. Feel free to reach out by email at{" "}
                    <span
                      style={{
                        color: "rgb(206, 84, 84)",
                        textShadow: "1px 1px 1px black",
                        cursor: "pointer"
                      }}
                    >
                      bkwillia052@gmail.com
                    </span>{" "}
                    if you'd like to chat! <br />
                    <br />
                    Thanks for visiting!
                  </div>
                </div>

                <div className="profile-pic">
                  <img src={require("./assets/bk-pic.jpg")} alt="profile-pic" />
                </div>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} /* speed={0.5} */>
            <ProjectsPage />
          </ParallaxLayer>
        </Parallax>
        <nav>
          <div className="page-links">
            <div
              name="home"
              className={`${
                this.state.currentTab === "home" ? "manila" : ""
              } button`}
              onClick={this.switchTab}
            >
              HOME
            </div>
            <div
              name="about"
              className={`${
                this.state.currentTab === "about" ? "burg" : ""
              } button`}
              onClick={this.switchTab}
            >
              ABOUT
            </div>
            <div
              name="projects"
              className={`${
                this.state.currentTab === "projects" ? "bl" : ""
              } button`}
              onClick={this.switchTab}
            >
              PROJECTS
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
