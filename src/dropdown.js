import React, { useState } from "react";
import "./dropdown.css";

function Dropdown({ title, items, multiSelect = false }) {
  // setting the usestate to check if dropdown is open if it is perform the useState function...same for selection
  // toggle will use the set open method to open the dropdown
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleClick(items) {}
  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}  
        className="dd-header"
        role="button"
        // setting !open to opposite of what is set in State
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header_title">
          <p className="dd-header_title--bold">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
