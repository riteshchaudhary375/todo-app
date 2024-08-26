import { createContext, useEffect, useReducer, useState } from "react";

// Create Context APi
export const TodoContext = createContext({
  todoList: [],
  addInitialTodos: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleTodo: () => {},
  fetching: false,
  error: "",
  setError: "",
});

const initialState = {
  todoList: [],
  addInitialTodos: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleTodo: () => {},
  fetching: false,
  error: "",
  setError: "",
};

// Reducer Function
const todoListReducer = (currTodoList, action) => {
  // console.log(currTodoList);
  let newTodoList = currTodoList;
  if (action.type === "DELETE_TODO") {
    newTodoList = currTodoList.filter(
      (item) => item._id !== action.payload.todoId
    );
  } else if (action.type === "ADD_TODO") {
    newTodoList = [action.payload, ...currTodoList];
  } else if (action.type === "ADD_INITIAL_TODOS") {
    newTodoList = action.payload.todos;
  } else if (action.type === "UPDATE_TODO") {
    newTodoList = [...currTodoList, action.payload];
  } else if (action.type === "TOGGLE_TODO") {
    newTodoList = [...currTodoList];
  }
  return newTodoList;
};

// Context Provider Component
const TodoContextProvider = ({ children }) => {
  // useReducer hook
  const [todoList, dispatchTodoList] = useReducer(todoListReducer, []);

  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  const addInitialTodos = (todos) => {
    dispatchTodoList({
      type: "ADD_INITIAL_TODOS",
      payload: { todos },
    });
  };

  /* Method-1 addTodo

  const addTodo = (name, date) => {
    dispatchTodoList({
      type: "ADD_TODO",
      payload: {
        id: new Date(Date.now()),
        todoName: name,
        dueDate: date,
      },
    });
  }; 
  */

  // Method-2
  const addTodo = (todo) => {
    dispatchTodoList({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  // Delete todo function
  const deleteTodo = (todoId) => {
    dispatchTodoList({
      type: "DELETE_TODO",
      payload: {
        todoId,
      },
    });
  };

  // Edit todo function
  const updateTodo = (updatedTodoItem) => {
    dispatchTodoList({
      type: "UPDATE_TODO",
      payload: {
        updatedTodoItem,
      },
    });
  };

  // Toggle Todo function
  const toggleTodo = (updatedTodoStatus) => {
    dispatchTodoList({
      type: "TOGGLE_TODO",
      payload: {
        updatedTodoStatus,
      },
    });
    // console.log("Checked box...");
  };

  // Fetching initialTodos
  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("/api/v1/getTodos", { signal })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.todos);

        // addInitialTodos([]);

        addInitialTodos(data.todos);

        setFetching(false);

        // The useEffect Hook Cleanup
        // it will clean up any calls in backend like, timer, api calling,...
        // like clean up 'clock' while moving another component.
        return () => {
          console.log("Abort Controller: Cleaning up useEffect");
          controller.abort();
        };
      })
      .catch((err) => {
        console.log(err.message);
        setFetching(false);
      });
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addInitialTodos,
        addTodo,
        deleteTodo,
        updateTodo,
        toggleTodo,
        fetching,
        error,
        setError,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const DEFAULT_TODO_LIST = [
  {
    id: "1",
    todoName: "Buy Ghee",
    dueDate: "2/3/2028",
  },
  {
    id: "2",
    todoName: "Buy Book",
    dueDate: "2/3/2028",
  },
  {
    id: "3",
    todoName: "Buy Laptop",
    dueDate: "2/3/2028",
  },
];

export default TodoContextProvider;
