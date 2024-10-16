import { request } from "express";
import { TodoModel } from "../models/todo.js";
import { addTodoValidator, updateTodoValidator } from "../validators/todo.js";

export const addTodo = async (req, res) => {
  try {
    // Check if User is authenticated
    // Validate user input
    const { error, value } = addTodoValidator.validate({
      ...req.body, icon: req.file?.filename
    });
    if (error) {
      return res.status(422).json(error);
    }

    // Save Todo in the database
    await TodoModel.create(value);
    res.status(201).json("Todo Added");
  } catch (error) {
    next(error);
  }
};

export const getTodos = async (req, res, next) => {
  try {
      const {filter = "{}", limit = 10, skip = 0} = req.query;
      // Fetch todos from the database
    const todos = await TodoModel
      .find(JSON.parse(filter))
      .limit(limit)
      .skip(skip);
    
    // Send response
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
