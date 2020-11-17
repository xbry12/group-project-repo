import React, { Component } from "react";
// import {useState} from 'react'
import "./booking.css";
import { Button } from "../stories/Button";
import Dropdown from "../dropdown";

class Booking extends Component {
  constructor(props) {
    super();
    this.state = {
      instructors: "",
    };
  }


  // componentDidMount() {
  //   let hello = [];
  //   this.props.instructors.forEach((person, i) => {
  //     hello.push({
  //       id: person._id,
  //       value: `${person.firstName} ${person.lastName}`,
  //     });
  //     // console.log(person)
  //   });
  //   console.log(hello);
  //   this.setState({
  //     items: hello,
  //   });
  // }
  
  handleApp = (e) => {
    e.preventDefault()
    
    fetch("https://groupgymproject.herokuapp.com/Classes/Bookings", {
      headers: {
        body: this.state.date,
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) =>(console.log(output) ));

    // console.log(this.state.date);
  };

  handleClass = (e) => {
    this.setState({
      date: e.target.value
    })
    console.log(e.target.value);
  };

  render() {
    console.log(this.props.data);
    return (
      <div className="bookings">
        {/* <h1>Book Appointment</h1> */}

        <div className="bookinginfo">
          {this.props.data.length !== 0
            ? this.props.data.map((bookings) => (
                <div>
                  {/* <h2>{(bookings.day)}</h2> */}
                  <Button
                    className="storybook-button--primary storybook-button--small"
                    label="Booked"
                  />
                </div>
              ))
            : null}
        </div>

        <div className="container">
          {/* <Dropdown title="select instructor" items={this.state.items} /> */}
        </div>

        <div className="existingbookings">
          <p>Book Appointment</p>

          <form>
            <label>
              Choose Day
              <input type="text" onChange={this.handleClass} name="name" />
            </label>
         
            {console.log(this.state.input)}
            <div>
              <Button
                className="storybook-button--primary storybook-button--small book"
                label="Booked"
                onClick={this.handleApp}
              />
              <Button
                className="storybook-button--secondary storybook-button--small book2"
                label="Cancel Booking"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Booking;
