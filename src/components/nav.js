import React, { useState } from "react";
import {  Link } from 'react-router-dom'
import logo from '../images/Screen Shot 2020-11-16 at 4.13.15 PM.png'
import "./nav.css";
// import Dumbbell from './Dumbbell/Dumbbell.js' 

function Nav(props) {
  const [open, setOpen] = useState(false);
  // open is the variable
  // set open is the function
  return (
    <div>
      <nav>
        <div className="logo">
           <Link to="/">BodyWorks 
           <img src={logo}/>
           {/* <div className='dumbbell'><Dumbbell /> </div> */}
           </Link> 
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
