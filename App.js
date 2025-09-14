import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Increase count
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Decrease count
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Reset count
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}export default App;
