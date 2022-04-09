import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Counter from "./components/counter";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/counters";

ReactDOM.render(<Counters />, document.getElementById("root"));
