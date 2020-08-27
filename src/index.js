import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(<App />, root);
}
