import { createContext, useEffect, useReducer, useState } from "react";

// Create Context APi
export const TodoContext = createContext({
  todoList: [],
  addInitialTodos: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  // fetching: false,
  error: "",
  setError: "",
});

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
  }
  return newTodoList;
};

// Context Provider Component
const TodoContextProvider = ({ children }) => {
  // useReducer hook
  const [todoList, dispatchTodoList] = useReducer(
    todoListReducer,
    // DEFAULT_TODO_LIST
    []
  );

  // const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  const addInitialTodos = (todos) => {
    dispatchTodoList({
      type: "ADD_INITIAL_TODOS",
      payload: { todos },
    });
  };

  /* 
  // Method-1

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

  // Fetching initialTodos

  /*   const fetchingInitialTodos = async () => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    try {
      const res = await fetch("/api/v1/getTodos", { signal });
      const data = await res.json();

      const todos = data.todos;

      // console.log(todos);

      addInitialTodos(todos);
      setFetching(false);

      // The useEffect Hook Cleanup
      // it will clean up any calls in backend like, timer, api calling,...
      // like clean up 'clock' while moving another component.
      return () => {
        controller.abort();
      };
    } catch (error) {
      console.log(error);
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchingInitialTodos();
  }, []); */

  /*  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    var responseClone;
    fetch("/api/v1/getTodos", { signal })
      .then((res) => {
        responseClone = res.clone();
        return res.json();
      })
      .then(
        (data) => {
          addInitialTodos(data.todos);
          // addInitialTodos([]);
          setFetching(false);
        },
        function (rejectionReason) {
          console.log(
            "Error parsing JSON from response:",
            rejectionReason,
            responseClone
          );
          responseClone.text();
        }
      )
      .then(function (bodyText) {
        console.log("Received the following instead of valid JSON:", bodyText); // 6
      })
      .catch((err) => {
        console.log(err);
        // setError(err.message);
      });

    // The useEffect Hook Cleanup
    // it will clean up any calls in backend like, timer, api calling,...
    // like clean up 'clock' while moving another component.
    return () => {
      controller.abort();
    };
  }, []); */

  return (
    <TodoContext.Provider
      value={{
        todoList,
        addInitialTodos,
        addTodo,
        deleteTodo,
        updateTodo,
        // fetching,
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
