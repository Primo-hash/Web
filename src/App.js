import React, { Component } from 'react';
import Sidebar from 'https://github.com/Primo-hash/Web/tree/master/src/Components/Sidebar';
import Landing from 'https://github.com/Primo-hash/Web/tree/master/src/Components/Landing';
import Experience from 'https://github.com/Primo-hash/Web/tree/master/src/Components/Experience';
import Education from 'https://github.com/Primo-hash/Web/tree/master/src/Components/Education';
import Skills from 'https://github.com/Primo-hash/Web/tree/master/src/Components/Skills';
import Interests from 'https://github.com/Primo-hash/Web/tree/master/src/Components/Interests';
import Awards from 'https://github.com/Primo-hash/Web/tree/master/src/Components/Awards';
import profileData from 'https://github.com/Primo-hash/Web/tree/master/src/profileData.json';
import ReactGA from 'react-ga';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      awards : profileData.awards
    };

    ReactGA.initialize('UA-158818625-1');
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Education education={this.state.education}/>
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
          <hr className="m-0" />
          <Awards awards={this.state.awards} />
        </div>
      </div>
    );
  }
}

export default App;
