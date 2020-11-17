import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import "./dropdown.css";

function Dropdown({ title, items = [], multiSelect = false }) {
  // setting the usestate to check if dropdown is open if it is perform the useState function...same for selection
  // toggle will use the set open method to open the dropdown
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);
  console.log("in dropdown!");

  function handleOnClick(item) {
    // selection is in the selection that user has selected
    //.some tests an element in an array
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
        //if item is not in state, then add the item
      } else if (multiSelect) {
        setSelection([...selection, item]);
        // the above code checks for the uniqueness of the item that is being passed in
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }
  function isItemInSelection(item) {
    // is there an item in the selection that matches what we pick
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }
  let text = "";

  if (selection.length) {
    text = selection[0].value;
    console.log(selection[0])
  } else {
    text = "";
    if (open) text = "open";
    else text = "closed";
  }

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
        <div className="dd-header_action">
          <p>{ text }</p>
          {/* <p>{open ? "Close" : "Open"}</p> */}
        </div>
        {open && (
          <ul className="dd-list">
            {items.map((item) => (
              <li className="dd-list-item" key={item.id}>
                <button type="button" onClick={() => handleOnClick(item)}>
                  <span>{item.value}</span>
                  <span>{isItemInSelection(item) && "Selected"}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};
export default onClickOutside(Dropdown, clickOutsideConfig);
