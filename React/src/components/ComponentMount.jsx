import React from "react";

class ComponentMount extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeUsers: null,
    };
  }

  componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
  }

  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}

export default ComponentMount;
