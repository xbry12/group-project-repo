import React, { Component } from "react";
import "./classes.css";

class Classes extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="class">
        <p></p>
        {this.props.data.length !== 0
          ? this.props.data.map((classes) => (
              <h1 className="edit">
                <span className="nameadjust">{classes.name}</span>
                <div className="desc">{classes.description}</div>
              </h1>
            ))
          : null}
      </div>
    );
  }
}

export default Classes;
