import React, { Component } from "react";

class Results extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  //methods
  votesAngularInPercent() {
    if (this.store.getState().angular) {
      return (
        (this.store.getState().angular /
          (this.store.getState().angular +
            this.store.getState().react +
            this.store.getState().vuejs)) *
        100
      );
    } else {
      return 0;
    }
  }

  votesReactInPercent() {
    if (this.store.getState().react) {
      return (
        (this.store.getState().react /
          (this.store.getState().angular +
            this.store.getState().react +
            this.store.getState().vuejs)) *
        100
      );
    } else {
      return 0;
    }
  }

  votesVueInPercent() {
    if (this.store.getState().vuejs) {
      return (
        (this.store.getState().vuejs /
          (this.store.getState().angular +
            this.store.getState().react +
            this.store.getState().vuejs)) *
        100
      );
    } else {
      return 0;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="graph">
          <span>Angular</span>
          <div className="progress progress-striped ">
            <div
              className="progress-bar bg-danger"
              style={{
                width: `${this.votesAngularInPercent().toFixed(2) + "%"}`
              }}
            >
              {this.votesAngularInPercent().toFixed(2) + "%"}
            </div>
          </div>
        </div>

        <div className="graph">
          <span>React</span>
          <div className="progress progress-striped ">
            <div
              className="progress-bar bg-info"
              style={{
                width: `${this.votesReactInPercent().toFixed(2) + "%"}`
              }}
            >
              {this.votesReactInPercent().toFixed(2) + "%"}
            </div>
          </div>
        </div>

        <div className="graph">
          <span>Vue</span>
          <div className="progress progress-striped ">
            <div
              className="progress-bar bg-success"
              style={{
                width: `${this.votesVueInPercent().toFixed(2) + "%"}`
              }}
            >
              {this.votesVueInPercent().toFixed(2) + "%"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
