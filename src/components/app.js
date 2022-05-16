// import { h } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for `routes` directory
import Home from "../routes/home";
import Profile from "../routes/profile";
import Hello from "../routes/hello";
import ToDo from "../routes/todo";
import ToDoList from "../routes/todo/ToDoList";

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" />

      <ToDoList path="todo/" name="Sneha" />
      <Profile path="/profile/" user="me" />
      <Profile path="/profile/:user" />
      <Hello path="/hello/" name="Sneha" />
    </Router>
  </div>
);

export default App;
