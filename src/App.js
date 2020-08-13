import React from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Counters from "./components/Counters.jsx";

class App extends React.Component {
  state = {
    counters: [
      { id: 0, value: 1 },
      { id: 1, value: 1 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
    ],
  };
  handleIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value++;
    this.setState(counters);
  };
  handleResetCounter = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value = 0;
    this.setState(counters);
  };
  handleReset = (counter) => {
    let counters = [...this.state.counters];
    counters.map((counter) => (counter.value = 0));
    this.setState(counters);
  };
  calculateCounters = () => {
    let count = 0;
    let counters = [...this.state.counters];
    counters.forEach((counter) => {
      count += counter.value;
    });
    return count;
  };
  render() {
    return (
      <React.Fragment>
        <Nav count={this.calculateCounters} />
        <Counters
          doIncrement={this.handleIncrement}
          doResetCounter={this.handleResetCounter}
          doReset={this.handleReset}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
