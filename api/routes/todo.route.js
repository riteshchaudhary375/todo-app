import express from "express";
import {
  deleteTodo,
  getTodo,
  getTodos,
  postTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/postTodo", postTodo);
router.get("/getTodos", getTodos);
router.delete("/deleteTodo/:todoId", deleteTodo);
router.put("/updateTodo/:todoId", updateTodo);
router.get("/getTodo/:todoId", getTodo);

export default router;
