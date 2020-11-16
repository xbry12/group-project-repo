import React, { Component } from "react";
import "./booking.css";

class Booking extends Component {
  constructor(props) {
    super()
  }

  render() {
    console.log(this.props.data)
    return (
      <div className="bookings">
        <h1>Book Appointment</h1>
        <div className="bookinginfo">
          {this.props.data.length !== 0
            ? this.props.data.map((bookings) => <h2>{(bookings.day)}</h2>)
            : null}
        </div>

        {/* <form>
          <label>
            Enter Name
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form> */}
        {/* <button className="bookbtn">Book Here</button> */}
      </div>
    );
  }
}

export default Booking;
