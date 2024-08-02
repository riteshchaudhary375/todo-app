import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import "./App.css";

const App = () => {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "8/2/2024",
    },
    {
      name: "Go to college",
      dueDate: "8/2/2024",
    },
  ];

  return (
    <Container>
      <center className="todoContainer">
        <AppName />
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </center>
    </Container>
  );
};

export default App;
