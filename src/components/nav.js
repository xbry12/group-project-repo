import React, { useState } from "react";
import {  Link } from 'react-router-dom'
import "./nav.css";

function Nav(props) {
  const [open, setOpen] = useState(false);
  // open is the variable
  // set open is the function
  return (
    <div>
      <nav>
        <div className="logo">
           <Link to="/">BodyWorks</Link>
           </div>
        {/* {props.aboutData} */}
        <ul
          className="nav-links"
          // burger transform for responsiveness`
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <Link to="/">About Us</Link>
          </li>
          <li>
            <Link to="Classes/Instructors">Instructors</Link>
          </li>
          <li>
            <Link to="/Classes">Classes</Link>
          </li>
          <li>
            <Link to="/Classes/Booking">Bookings</Link>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default Nav;
