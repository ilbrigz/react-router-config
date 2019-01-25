import React from "react";
import ReactDOM from "react-dom";
import RouteConfig from "./RoutesConfig.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <RouteConfig />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
