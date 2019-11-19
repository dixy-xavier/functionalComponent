import React, { useState } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

import "./styles.css";
import Layout from "./Layout";
import Child from "./Child";

function App() {
  const [show, setShow] = useState(false);
  const [dummy, setDummy] = useState(false);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button onClick={() => setShow(!show)} />
      <Button onClick={() => setDummy(!dummy)} />
      <Layout child={() => show && <Child />} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
