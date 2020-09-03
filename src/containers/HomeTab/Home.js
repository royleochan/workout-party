import React from "react";
import "./Home.css";

class Home extends React.Component {
  // componentDidMount() {
  //   document.body.className = "home-body"; // Set the style
  // }

  createRoom() {
    window.location.href = "/invite";
  }

  render() {
    return (
      <div className="home-body">
        <form className="form1" onSubmit={this.handleSubmit2}>
          <input
            className="id-home"
            type="text"
            align="center"
            placeholder="Enter Room ID"
            name="name"
          />
          <button className="submit-home" type="submit" align="center">
            Join Room
          </button>
        </form>
        <button
          className="submit-home2"
          onClick={this.createRoom}
          align="center"
        >
          Create New Room
        </button>
      </div>
    );
  }
}

export default Home;
