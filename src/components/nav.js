import React, { useState } from "react";
import "./nav.css";

function Nav(props) {
  const [open, setOpen] = useState(false);
  // open is the variable
  // set open is the function
  return (
    <div>
      <nav>
        <div className="logo"> BodyWorks</div>
        {/* {props.aboutData} */}
        <ul
          className="nav-links"
          // burger transform for responsiveness`
          style={{ transform: open ? "translateX(0px)" : "" }}
        >
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Instructors</a>
          </li>
          <li>
            <a>Classes</a>
          </li>
          <li>
            <a>Bookings</a>
          </li>
        </ul>
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default Nav;
