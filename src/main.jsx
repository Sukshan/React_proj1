import React from "react";
import ReactDOM from "react-dom/client";
import Def from "./Greeter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Def />);

function Hello() {
  return <h1> Hello world </h1>;
}

const boot = ReactDOM.createRoot(document.getElementById("boot"));
boot.render(<Hello />);
