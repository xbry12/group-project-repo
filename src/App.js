import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav.js";
import Instructors from "./components/instructors.js";
// import Classes from "./components/classes.js"

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

  }


  render() {
    return (
      <div className="App">
        <div>
          <Nav />
          {/* <Instructors data={this.state.bio} /> */}
          <Instructors data={this.state.bioJson} />
          {/* <Classes data={this.state.classesJson}/> */}
        </div>
      </div>
    );
  }
}

export default App;
