import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./components/App";
import "./index.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
