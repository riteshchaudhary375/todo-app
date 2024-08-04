import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    todoName: {
      type: String,
      required: true,
      unique: true,
    },
    dueDate: {
      type: String,
      required: false,
      unique: false,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
