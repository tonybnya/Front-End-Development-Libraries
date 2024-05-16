import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>Increment</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default Counter;
