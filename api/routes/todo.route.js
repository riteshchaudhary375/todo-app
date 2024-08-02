import express from "express";
import {
  deleteTodo,
  getTodos,
  postTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/postTodo", postTodo);
router.get("/getTodos", getTodos);
router.delete("/deleteTodo/:todoId", deleteTodo);

export default router;
