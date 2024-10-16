import { Router } from "express";
import { addTodo, getTodos, updateTodo, deleteTodo } from "../controllers/todo";


// Create a Router
const todoRouter = Router();
// Define routes
todoRouter.post("/todos", addTodo);

todoRouter.get("/todos", getTodos);

todoRouter.patch("/todos/:id", updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

export default todoRouter;