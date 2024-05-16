import React from "react";
import PropTypes from "prop-types";

const Camper = (props) => {
  return <p>{props.name}</p>;
};

Camper.defaultProps = { name: "CamperBot" };
Camper.propTypes = { name: PropTypes.string.isRequired };

class CamperSite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}

export default CamperSite;
