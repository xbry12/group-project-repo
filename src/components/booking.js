import React, { Component } from "react";
import "./booking.css";
import { Button } from "../stories/Button";
import Dropdown from "../dropdown";

class Booking extends Component {
  constructor(props) {
    super();
    this.state = {
      instructors: "",
      data: [],
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

  componentDidMount() {
    this.fetchBookingData();
  }

  handleApp = (e) => {
    e.preventDefault();

    fetch("https://groupgymproject.herokuapp.com/Classes/Bookings", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: this.state.date, "if-booked": true }),
    })
      .then((response) => response.json())
      .then((output) => this.fetchBookingData());
  };

  handleClass = (e) => {
    this.setState({
      date: e.target.value,
    });
    console.log(e.target.value);
  };
  handleDelete = (_id, e) => {
    console.log(_id);
    fetch("https://groupgymproject.herokuapp.com/Classes/Bookings/" + _id, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.fetchBookingData());
  };

  handleUpdate = (_id, e) => {
    fetch("https://groupgymproject.herokuapp.com/Classes/Bookings/" + _id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date: this.state.date, "if-booked": false }),
    })
      .then((response) => response.json())
      .then((output) => this.fetchBookingData());
  };

  fetchBookingData = () => {
    fetch("https://groupgymproject.herokuapp.com/Classes/Bookings", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ data: output }));
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="bookings">
        {/* <h1>Book Appointment</h1> */}

        <div className="bookinginfo">
          {this.state.data.length !== 0
            ? this.state.data.map((bookings) => (
                <div>
                  <h2>
                    {bookings.date}
                    {bookings._id}
                    
                  </h2>
                  <Button
                    className="storybook-button--primary storybook-button--small"
                    label="Remove Appt"
                    // onClick={(bookings._id => {this.handleDelete})}
                    onClick={(e) => this.handleDelete(bookings._id, e)}
                  />

                  <Button
                    className="storybook-button--secondary storybook-button--small book2"
                    label="Update Booking"
                    onClick={(e) => this.handleUpdate(bookings._id, e)}
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
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Booking;
