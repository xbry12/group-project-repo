import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/Screen Shot 2020-11-16 at 4.13.15 PM.png";
import "./nav.css";

function Nav(props) {
  const [open, setOpen] = useState(false);
  // open is the variable
  // set open is the function
  return (
    <div>
      <nav>
        <div className="logo">
          <Link to="/" className="nav-links">
            <div className="title">BodyWorks</div>
            <img src={logo} />
          </Link>
        </div>

        <ul
          className="nav-links"
          // burger transform for responsiveness`
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <Link to="/Classes/Instructors" className="link">
              Instructors
            </Link>
          </li>
          <li>
            <Link to="/Classes" className="link">
              Classes
            </Link>
          </li>
          <li>
            <Link to="/Classes/Booking" className="link">
              Bookings
            </Link>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default Nav;
