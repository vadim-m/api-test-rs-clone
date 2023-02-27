import { Router } from "express";
import TodoController from "../controllers/todo.js";

const router = new Router();

router.post("/todo", TodoController.createTodo);
router.get("/todo/:id", TodoController.getTodos);
router.patch("/todo/:id", TodoController.updateTodo);
router.delete("/todo/:id", TodoController.deleteTodo);

export default router;
