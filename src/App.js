import React, { Component } from "react";
import "./App.css";
import Nav from "./components/nav.js";


class App extends Component {
    // constructor(){
    //   super()
    // }
  
    componentDidMount() {
     console.log('!!!')
    fetch('https://groupgymproject.herokuapp.com/Classes', {
        headers: {
            "Accept": "application/json"
           }
    })
        .then((response) => response.json())
        .then((data) =>  console.log(data))
}




  render() {
    console.log("hellos")
    return (
      <div className="App"> 
        <div>
          <Nav />
        </div>

        

        {/* <div className="calendar">
          <MyCalendar/>
        </div> */}
      </div>
    );
  }
}

export default App;
