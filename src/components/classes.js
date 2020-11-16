import React, { Component } from "react";
import './classes.css'

class Classes extends Component {
    constructor(props) {
    super()

    }
    
    render() {
      console.log(this.props.data)
    return (
      <div className="class">
        {this.props.data.length !== 0
          ? this.props.data.map((classes) => 
          <h1 className="edit">
            <span className="nameadjust">
            {(classes.name)}
            </span>
          <div className="desc">
            {(classes.description)}
          </div>
          </h1>
              ) 
        : null}

          {/* booked : Schema -> true/false */}
          {/* My Schedule -> booked or not, -> class name = button/book or unbook */}

      </div>
    );
  }
}

export default Classes;
