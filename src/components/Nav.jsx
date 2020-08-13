import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">
          Total Counters{" "}
          <span className="badge-pill badge-primary p-2">
            {this.props.count()}
          </span>
        </span>
      </nav>
    );
  }
}

export default Nav;
