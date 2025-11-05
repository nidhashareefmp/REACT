import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if count changes
    if (this.state.count !== nextState.count) {
      console.log("Component will update");
      return true;
    }
    console.log("Component will NOT update");
    return false;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Render called");
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
