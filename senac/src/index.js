import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Ipca from "./pages/Ipca";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Ipca />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
