import React, { Component } from "react";
import "./booking.css";
import {Button} from '../stories/Button'
import Dropdown from "../dropdown";
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
            ? this.props.data.map((bookings) => 
            <div>
            <h2>{(bookings.day)}</h2>
            <Button className='storybook-button--primary storybook-button--large' label='Booked'/></div>
            )
            
            : null}
           
        </div>
        <Dropdown />
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
