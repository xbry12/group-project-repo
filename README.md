# GYM group-project 

## Description 

This is a project where we built the front end to our back end using React! By fetching our URL and routes into this project, we have created a full application. The purpose of our project is to go to a gym website and book a workout class at the gym. By booking a class, updating the booking, or deleting the booking, we have implemented full CRUD functuality. 

## Example

The example below is from Src/App.js and shows our fetch calls in componentDidMount. 

componentDidMount() {
    fetch("https://groupgymproject.herokuapp.com/Classes/Instructors", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((output) => this.setState({ bioJson: output }));

      fetch("https://groupgymproject.herokuapp.com/Classes/", {
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((output) => this.setState({ classesJson: output }));
  
  }

## Features

We first did a fetch call on our data so we could populate our page with information. We then set up our components, five of which were made in storybook, and used our routes for each component so they would all have a landing page. Using Jest we were able to test our components and their functions. Lastly, we created our Bookings component to have full CRUD functuality. 


## Technologies

For this project, we used React, Storybook, and Jest. 

### Installing 

To set up this project you will first need to fork my repo by clicking on Fork in the top right corner and choosing where to fork to. Then you will click Clone or Download and copy the url. Next open your terminal and change to the directory you wish to work on the project. Here you will run the command 'git clone' followed by pasting the url you just copied. Hit enter. You can now change to the project directory at group-project-repo. Run the command npm start and this will bring you to the project in your chrome. 

## Authors

https://github.com/xbry12/group-project-repo

https://github.com/xbry12/group-project-repo/issues

Bryant Pyram: xbry12
Lily Klopcic: Lilypk
SamiDenis: SamiDenis


