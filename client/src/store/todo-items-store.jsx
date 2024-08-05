import { createContext, useReducer } from "react";

// Create Context APi
export const TodoContext = createContext({
  todoList: [],
  addInitialTodos: () => {},
  addTodo: () => {},
  deleteTodo: () => {},
});

// Reducer Function
const todoListReducer = (currTodoList, action) => {
  let newTodoList = currTodoList;
  if (action.type === "DELETE_TODO") {
    newTodoList = currTodoList.filter(
      (item) => item.id !== action.payload.todoId
    );
  } else if (action.type === "ADD_TODO") {
    newTodoList = [action.payload, ...currTodoList];
  } else if (action.type === "ADD_INITIAL_TODOS") {
    newTodoList = action.payload.todos;
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

  const addInitialTodos = (todos) => {
    dispatchTodoList({
      type: "ADD_INITIAL_TODOS",
      payload: {
        todos,
      },
    });
  };

  const addTodo = (name, date) => {
    // console.log(`Data: ${name} ${date}`);
    dispatchTodoList({
      type: "ADD_TODO",
      payload: {
        id: new Date(Date.now()),
        todoName: name,
        dueDate: date,
      },
    });
  };

  const deleteTodo = (todoId) => {
    dispatchTodoList({
      type: "DELETE_TODO",
      payload: {
        todoId,
      },
    });
  };

  return (
    <TodoContext.Provider
      value={{ todoList, addInitialTodos, addTodo, deleteTodo }}
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
