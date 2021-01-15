import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
