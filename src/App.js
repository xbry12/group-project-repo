import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav.js";
import Instructors from "./components/instructors.js";
import Classes from "./components/classes.js";
import Booking from "./components/booking.js";
import { Button } from "./stories/Button";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { FooterContainer } from "./components/footerdata/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bioJson: null,
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
              <Route exact path="/group-project-repo/">
                <div className="welcome">
                  <Button
                    className="storybook-button--secondary storybook-button--extra-large"
                    label="Welcome to BodyWorks"
                  />
                  <Button
                    className="storybook-button--primary storybook-button--small join"
                    label="Join Now"
                  />
                </div>
              </Route>
              <Route exact path="/Classes/Instructors">
                <Instructors data={this.state.bioJson} />
              </Route>
              <Route exact path="/Classes">
                <Classes data={this.state.classesJson} />
              </Route>
              <Route exact path="/Classes/Booking">
                {this.state.bioJson ? (
                  <Booking
                    data={this.state.bookingsJson}
                    instructors={this.state.bioJson}
                  />
                ) : (
                  "loading"
                )}
              </Route>
            </Switch>
          </BrowserRouter>
          <FooterContainer />
        </div>
      </div>
    );
  }
}

export default App;
