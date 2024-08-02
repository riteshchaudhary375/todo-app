import Todo from "../models/todo.model.js";
import { errorHandler } from "../utils/error.js";

export const postTodo = async (req, res, next) => {
  const { todoName, dueDate } = req.body;

  if (!todoName || !dueDate) {
    /* return res
      .status(400)
      .json({ success: false, message: "All fields required" }); */

    next(errorHandler(400, "All fields required"));
  }

  const newTodo = new Todo({ todoName, dueDate });

  try {
    const data = await newTodo.save();
    res.status(201).json({ success: true, data });
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

export const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();

    const totalTodos = await Todo.countDocuments();

    res.status(200).json({ success: true, totalTodos, todos });
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.todoId);

    res.status(200).json("Todo has been deleted");
  } catch (error) {
    next(error);
  }
};
