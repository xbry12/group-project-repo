import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav.js";
import Instructors from "./components/instructors.js";
import Classes from "./components/classes.js"
// import Button from './components/Button/Button.js';
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bioJson: [],
      classesJson: []
    };
  }

  componentDidMount() {
    fetch("https://groupgymproject.herokuapp.com/Classes/Instructors", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ bioJson: output }));

      fetch("https://groupgymproject.herokuapp.com/Classes/", {
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((output) => this.setState({ classesJson: output }));
  
  }


  render() {
    return (
      <div className="App">
        <div>
          <Nav aboutData="Bryant" />
          


          {/* <Instructors data={this.state.bioJson} /> */}
          {/* <Classes data={this.state.classesJson}/> */}
          {/* <Button/> */}

        </div>
      </div>
    );
  }
}

export default App;
