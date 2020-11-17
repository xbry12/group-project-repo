import React, { Component } from "react";
import "./booking.css";
import {Button} from '../stories/Button'
import Dropdown from "../dropdown";


class Booking extends Component {
  constructor(props) {
    super()
    this.state = {
  }
}
componentDidMount() {
  let hello = []
  this.props.instructors.forEach((person,i) => {
    hello.push({id:person._id, value: `${person.firstName} ${person.lastName}`})
    // console.log(person)
  })
  console.log(hello)
  this.setState({
    items: hello
  })

  // console.log(this.props.instructors)
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
            <Button className='storybook-button--primary storybook-button--small' label='Booked'/></div>
            )
            
            : null}
        
           
        </div>

        

        <div className="container">
        <Dropdown title="select instructor" items={this.state.items} />

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
