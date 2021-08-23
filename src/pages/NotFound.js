import React, { Component } from "react";
import cat404 from "../assets/404_cat.jpeg";
class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <h3>Not Found</h3>
        <img src={cat404} alt="404 cat" />
      </div>
    );
  }
}

export default NotFound;
