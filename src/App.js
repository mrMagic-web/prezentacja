import React, { Component } from "react";
import "./App.css";
import PhotoBackground from "./components/PhotoBackground";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotoBackground
          background={
            "https://github.com/snaerth/create-react-component-folder/blob/master/docs/help.png?raw=true"
          }
        />
      </div>
    );
  }
}

export default App;
