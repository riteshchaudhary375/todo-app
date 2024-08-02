import React, { useEffect, useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";

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

  // const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [todoItems, setTodoItems] = useState([]);

  const getTodos = async () => {
    await fetch("/api/v1/getTodos")
      .then((res) => res.json())
      .then((data) => {
        setTodoItems(data.todos);
        // console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New item added: ${itemName} on date ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);

    // console.log(`Item deleted: ${todoItemName}`);
  };

  return (
    <Container>
      <center className="todoContainer">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage />}
        <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
      </center>
    </Container>
  );
};

export default App;
