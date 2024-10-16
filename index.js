// const express = require('express');
import express from "express";
import mongoose from "mongoose";
import todoRouter from "./routes/todo.js";
import userRouter from "./routes/user.js";
import cors from "cors";

// Create an express app
const app = express();

// Connect to database
await mongoose.connect(process.env.MONGODB_URI);

// Define routes
// app.get('/hello', function (req, res, next) {
//     console.log(req.headers);
//     res.json("You visited the hello endpoint!");
// });

// app.get('/come', (req, res, next) => {
//     console.log(req.headers);
//     res.json("I am a PRO!!!!!")
// });

// app.get('/good-bye', function (req, res, next) {
//     console.log(req.query);
//     res.json("Same to you!!!");
// });


// Use middlewares
app.use(express.json());
app.use(cors());

// Use routes
app.use(todoRouter);
app.use(userRouter);

// Listen for incoming requests
app.listen(3000, function () {
  console.log("App is listening on Port 3000!!!");
});
