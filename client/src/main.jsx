import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import EditTodo from "./components/EditTodo.jsx";
import CreateTodo from "./components/CreateTodo.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoContextProvider from "./store/todo-items-store";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create-todo" element={<CreateTodo />} />
          <Route path="/edit-todo/:todoId" element={<EditTodo />} />
        </Routes>
      </BrowserRouter>
    </TodoContextProvider>
  </React.StrictMode>
);
