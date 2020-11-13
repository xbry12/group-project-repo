import React from "react";
import "./instructors.css";


let Instructors = (props) => {
  console.log(props);
  return (
    <div className="card">
      {props.data.length !== 0
        ? props.data.map((instructor) => 
        <h1 className="Instructors">
            <div className="border">
            <span className="name">
            {instructor.firstName}
            </span>
            <span className="lastname">
            {instructor.lastName}
            </span>
            </div>

            <div className="bio">
            {instructor.bio}
            </div>
        </h1>)
        : null}

    </div>
    
  );
};

export default Instructors;

