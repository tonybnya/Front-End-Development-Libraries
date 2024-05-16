import React from "react";

class NewComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Hello",
    };

    this.state = {
      visibility: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  handleClick() {
    this.setState({
      text: "You Clicked!",
    });
  }

  toggleVisibility() {
    this.setState((state) => ({
      visibility: !state.visibility,
    }));
  }

  render() {
    return this.state.visibility ? (
      <div>
        <button onClick={this.handleClick}>Text</button> <br />
        <h1>{this.state.text}</h1>
        <button onClick={this.toggleVisibility}>Click Me</button>
        <h1>Now you see me!</h1>
      </div>
    ) : (
      <div>
        <button onClick={this.handleClick}>Text</button> <br />
        <h1>{this.state.text}</h1>
        <button onClick={this.toggleVisibility}>Click Me</button>
      </div>
    );
  }
}

export default NewComponent;
