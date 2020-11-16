import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav.js";
import Instructors from "./components/instructors.js";
import Classes from "./components/classes.js";
import Booking from "./components/booking.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Button from './stories/Button'
// import Button from './stories/Button'
// import ReactDOM from 'react-dom';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bioJson: [],
      classesJson: [],
      bookingsJson: [],
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

    fetch("https://groupgymproject.herokuapp.com/Classes/Bookings", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ bookingsJson: output }));
  }

  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Nav />
            <Switch>
              <Route exact path="/" component={""}></Route>
              <Route exact path="/Classes/Instructors">
                <Instructors data={this.state.bioJson} />
              </Route>
              <Route exact path="/Classes">
                <Classes data={this.state.classesJson} />
              </Route>
              <Route exact path="/Classes/Booking">
                <Booking data={this.state.bookingsJson} />
              </Route>
            </Switch>
          </BrowserRouter>

          {/* <Button/> */}
        </div>
      </div>
    );
  }
}

export default App;
