import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from "./Admin";
import Employee from "./Employee";
import Student from "./Student";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/admin/" component={Admin} />
          <Route path="/employee/" component={Employee} />
          <Route path="/student/" component={Student} />
        </div>
      </Router>
    </div>
  );
}

export default App;
