import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DataLayer from "./Datalayer";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <div>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />,
    </DataLayer>
  </div>,
  document.getElementById("root")
);
