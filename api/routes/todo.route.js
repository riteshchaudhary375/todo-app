import express from "express";
import { postTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/postTodo", postTodo);

export default router;
