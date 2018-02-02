import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const classNames = require("classnames");

import Hello from "../components/Hello";
import Sidebar from "../components/Sidebar";
import Results from "../components/Results";

const App = () => {
  const style = {
    display: "flex",
    flexDirection: "row"
  };

  return (
    <Router>
      <main style={style}>
        <Sidebar />
        <div>
          <Switch>
            <Route exact path="/" component={Hello} />
            <Route path="/:id" component={Results} />
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;
