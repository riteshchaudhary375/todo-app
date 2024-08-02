import Todo from "../models/todo.model.js";

export const postTodo = async (req, res) => {
  const { todoName, dueDate } = req.body;

  if (!todoName || !dueDate) {
    return res
      .status(400)
      .json({ success: false, message: "All fields required" });
  }

  const newTodo = new Todo({ todoName, dueDate });

  try {
    const data = await newTodo.save();
    res.status(201).json({ success: true, data });
  } catch (error) {
    console.log(error);
  }
};
