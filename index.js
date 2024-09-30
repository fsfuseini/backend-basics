// const express = require('express');
import express from 'express';

// Create an express app
const app = express();

// Define routes
app.get('/hello', function (req, res, next) {
    console.log(req.headers);
    res.json("You visited the hello endpoint!");
});

app.get('/come', (req, res, next) => {
    console.log(req.headers);
    res.json("I am a PRO!!!!!")
});


app.get('/good-bye', function (req, res, next) {
    console.log(req.query);
    res.json("Same to you!!!");
});

// Listen for incoming requests
app.listen(3000, function () {
    console.log("App is listening on Port 3000!!!");
});