import React from "react";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoNav from "./components/TodoNav";
import "./App.css";

const App = () => {
  return (
    <Container>
      <center className="todoContainer">
        <AppName />
        <TodoNav />
        <TodoItems />
        <WelcomeMessage />
      </center>
    </Container>
  );
};

export default App;
