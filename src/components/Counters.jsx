import React, { Component } from "react";
import Counter from "./Counter.jsx";

class Counters extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="list-unstyled">
          {this.props.counters.map((counter) => (
            <li key={counter.id}>
              <Counter
                id={counter.id}
                doIncrement={this.props.doIncrement}
                doReset={this.props.doResetCounter}
                counter={counter}
              />
            </li>
          ))}
        </ul>
        <button
          onClick={this.props.doReset}
          className="btn btn-warning ml-5 m-2"
        >
          Reset All Counters
        </button>
      </React.Fragment>
    );
  }
}

export default Counters;
