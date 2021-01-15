import React from "react";
import { voteReact, voteVuejs, voteAngular } from "../store/actions";
import { store } from "../store/voteStore";

function Header() {
  //event handler
  const handleVoteAngular = () => {
    store.dispatch(voteAngular());
  };

  const handleVoteRect = () => {
    store.dispatch(voteReact());
  };

  const handleVoteVuejs = () => {
    store.dispatch(voteVuejs());
  };

  return (
    <div className="jumbotron">
      <div className="App__heading">
        <h2>What is your favourite JS framework?</h2>
        <h5>Click on the image to vote</h5>
      </div>

      <img
        src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png"
        alt="Angular logo"
        onClick={handleVoteAngular}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        alt="react icon"
        onClick={handleVoteRect}
      />
      <img
        src="https://i.ibb.co/M99KY3w/vue-js-javascript-library-react-angularjs-hsv-logo-c6fbc27a3614875b0bee965d9e74a14d.png"
        alt="vue icon"
        onClick={handleVoteVuejs}
      />
    </div>
  );
}

export default Header;
