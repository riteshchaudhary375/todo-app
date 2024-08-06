import React, { useContext } from "react";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import Container from "./components/Container";
import TodoNav from "./components/TodoNav";
import "./App.css";
import { TodoContext } from "./store/todo-items-store";

const App = () => {
  const { error, setError } = useContext(TodoContext);

  return (
    <>
      <Container>
        <center className="todoContainer">
          <AppName />
          <TodoNav />
          <TodoItems setError={setError} />
        </center>
      </Container>

      <div className="errorDiv">
        {error && <p className="errorText">{error}</p>}
      </div>
    </>
  );
};

export default App;
