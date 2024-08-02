import express from "express";
import { getTodos, postTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/postTodo", postTodo);
router.get("/getTodos", getTodos);

export default router;
