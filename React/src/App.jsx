import React from "react";
import "./App.css";
// import Starter from "./components/Starter";
import PropTypes from "prop-types";
import MyComponent from "./components/MyComponent";
import Calendar from "./components/Calendar";
import ToDo from "./components/ToDo";
import ShoppingCart from "./components/ShoppingCart";
import CamperSite from "./components/CamperSite";
import StatefulComponent from "./components/StatefulComponent";
import NewComponent from "./components/NewComponent";
import Counter from "./components/Counter";
import ControlledInput from "./components/ControlledInput";
import MyForm from "./components/MyForm";
import MyApp from "./components/MyApp";
import Input from "./components/Input";
import ComponentMount from "./components/ComponentMount";
import Event from "./components/Event";
import Controller from "./components/Controller";
import Colorful from "./components/Colorful";
import MagicEightBall from "./components/MagicEightBall";
import IfElse from "./components/IfElse";
import ConciseConditional from "./components/ConciseConditional";
import CheckUserAge from "./components/CheckUserAge";
import GameOfChance from "./components/GameOfChance";
import GateKeeper from "./components/GateKeeper";
import MyToDoList from "./components/MyToDoList";
import Frameworks from "./components/Frameworks";
import Filter from "./components/Filter";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="myDiv">
          Hello, <strong>{this.props.name}</strong>!
        </p>
      </div>
    );
  }
}

Welcome.propTypes = { name: PropTypes.string };

const App = () => {
  return (
    <>
      {/* <Starter /> */}
      {/* <Welcome name={"Tony"} /> */}
      {/* <MyComponent /> */}
      {/* <Calendar /> */}
      {/* <ToDo /> */}
      {/* <ShoppingCart /> */}
      {/* <CamperSite /> */}
      {/* <StatefulComponent /> */}
      {/* <NewComponent /> */}
      {/* <Counter /> */}
      {/* <ControlledInput /> */}
      {/* <MyForm /> */}
      {/* <MyApp /> */}
      {/* <Input /> */}
      {/* <ComponentMount /> */}
      {/* <Event /> */}
      {/* <Controller /> */}
      {/* <Colorful /> */}
      {/* <MagicEightBall /> */}
      {/* <IfElse /> */}
      {/* <ConciseConditional /> */}
      {/* <CheckUserAge /> */}
      {/* <GameOfChance /> */}
      {/* <GateKeeper /> */}
      {/* <MyToDoList /> */}
      {/* <Frameworks /> */}
      <Filter />
    </>
  );
};

export default App;
