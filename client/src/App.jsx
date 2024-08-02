import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import "./App.css";

const App = () => {
  const initialTodoItems = [
    {
      name: "Buy milk",
      dueDate: "8/2/2024",
    },
    {
      name: "Go to college",
      dueDate: "8/2/2024",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New item added: ${itemName} on date ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  return (
    <Container>
      <center className="todoContainer">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <TodoItems todoItems={todoItems} />
      </center>
    </Container>
  );
};

export default App;
