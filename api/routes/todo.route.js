import express from "express";
import {
  deleteTodo,
  getTodos,
  postTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/postTodo", postTodo);
router.get("/getTodos", getTodos);
router.delete("/deleteTodo/:todoId", deleteTodo);
router.put("/updateTodo/:todoId", updateTodo);

export default router;
