import { TodoModel } from "../models/todo.js";

export const addTodo = async (req, res) => {
  try {
    await TodoModel.create(req.body);
    res.status(201).json("Todo Added");
  } catch (error) {
    next(error);
  }
};

export const getTodos = async (req, res, next) => {
    try {
      // Fetch todos from the database
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = (req, res, next) => {
  res.json("Update Todo");
};

export const deleteTodo = (req, res, next) => {
  res.json("Delete Todo");
};
