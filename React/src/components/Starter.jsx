import React from "react";

const MyComponent = () => {
  return <div>Test</div>;
};

const JSX = () => {
  return (
    <div>
      {/* Comment line */}

      <h1>Hello JSX!</h1>

      <p>This is a paragraph</p>

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

      <div className="myDiv">
        <h1>Add a class to this div</h1>
      </div>

      <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
      </div>
    </div>
  );
};

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
}

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}

const NonCitrus = () => {
  return (
    <div>
      <h3>Non Citrus:</h3>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Citrus = () => {
  return (
    <div>
      <h3>Citrus:</h3>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grapefruit</li>
      </ul>
    </div>
  );
};

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <NonCitrus />
      <Citrus />
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

const TypesOfVegetables = () => {
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  );
};

const Vegetables = () => {
  return (
    <div>
      <TypesOfVegetables />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
}

const Starter = () => {
  return (
    <>
      <JSX />
      <MyComponent />
      <ClassComponent />
      <ParentComponent />
      <TypesOfFood />
    </>
  );
};

export default Starter;
