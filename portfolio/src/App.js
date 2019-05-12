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

  switchTab = e => {
    let tab = e.target.name;
    console.log(e);
    this.setState({
      currentTab: tab
    });
    this.parallax.scrollTo(1);
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
                  <div className="wavemoji">
                    <img src={require("./assets/blobwave.png")} alt="" />{" "}
                    <span className="hi">Hi!</span>
                  </div>
                  <div className="about-descr">
                    I'm Brian, a Full Stack developer with a deep, ever-growing
                    interest in cloud technology, languages (both computer and
                    human!), and impactful ideas that empower societies and the
                    individuals therein. I have a B.A. in International
                    Management and, prior to programming, worked in
                    transnational companies in both business development and
                    adminstrative capacities. I also speak Chinese!
                    <br />
                    <br />
                    If you're reading this, then there's a high likelihood
                    (higher than if you weren't, at least) that there's some
                    work we should be doing together! That's quite a great
                    thing, eh? (considering the endless amounts of work there is
                    to be done out in this vast, crazily awesome world of ours).{" "}
                    <br />
                    So! I'm glad you've connected with me, and I hope I may be
                    of service to your cause. <br />
                    <br />
                    Feel free to reach out to me about anything!
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
