import React from "react";

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "tonybnya",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}

export default StatefulComponent;
