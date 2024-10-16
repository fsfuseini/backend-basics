import { Router } from "express";
import { addTodo, getTodos, updateTodo, deleteTodo } from "../controllers/todo.js";
import { localUpload, todoIconUpload } from "../middlewares/upload.js";


// Create a Router
const todoRouter = Router();
// Define routes

todoRouter.post("/todos", todoIconUpload.single("icon"), addTodo);

todoRouter.post("/todos", addTodo);

todoRouter.get("/todos", getTodos);

todoRouter.patch("/todos/:id", updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

export default todoRouter;