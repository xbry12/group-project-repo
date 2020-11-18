import React, { Component } from "react";
import "./booking.css";
import { Button } from "../stories/Button";

class Booking extends Component {
  constructor(props) {
    super();
    this.state = {
      instructors: "",
      data: [],
    };
  }

  componentDidMount() {
    this.fetchBookingData();
  }

  fetchBookingData = () => {
    fetch("https://groupgymproject.herokuapp.com/Classes/Bookings", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ data: output }));
  };

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

  render() {
    console.log(this.state.data);
    return (
      <div>
        <div className="bookapt">
          <p>Book Appointment</p>
          <form>
            <label>
              Choose Day
              <input type="text" onChange={this.handleClass} name="name" />
            </label>
            <div>
              <Button
                className="storybook-button--primary storybook-button--small book"
                label="Book Now"
                onClick={this.handleApp}
              />
            </div>
          </form>
        </div>

        <div className="bookings">
          <h1>Appointments Booked</h1>
          <div className="bookinginfo">
            {this.state.data.length !== 0
              ? this.state.data.map((bookings) => (
                  <div className="appt">
                    {bookings.date}
                    <Button
                      className="storybook-button--primary storybook-button--small"
                      label="Remove Appt"
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
        </div>
      </div>
    );
  }
}

export default Booking;
