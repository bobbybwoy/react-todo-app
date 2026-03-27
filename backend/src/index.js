const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const TodosModel = require("../models/todo.js");

dotenv.config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`);

const PORT = 3000;

const api = express();
api.use(express.json());

// Capture the new 
const dbTodoLists = [];
// let todoId = 4;

const getTodos = async () => {
    dbTodoLists.splice(0, dbTodoLists.length);
    const todos = await TodosModel.find().exec();
    todos.map(todo => {
        dbTodoLists.push({
            id: todo._id.toString(),
            description: todo.description,
            isCompleted: todo.isCompleted,
        });
    });
    console.log(dbTodoLists);
}

// Get all of the todo items
api.get("/todos", async (req, res) => {
    console.log(`${req.method}: ${req.headers.origin}${req.path}`);
    await getTodos();
    res.send(dbTodoLists);
});

// Add a todo to the list 
api.post("/todos", async (req, res) => {
    console.log(`${req.method}: ${req.headers.origin}`);
    // Extract the text from the body...
    const todo = req.body.todo;

    await TodosModel.create({
        description: todo,
        isCompleted: false,
    });

    res.statusCode = 201;
    await getTodos();
    res.send(dbTodoLists);
});

api.put("/todos/:id", async (req, res) => {
    console.log(`${req.method}: ${req.headers.origin}${req.path}`);
    const id = req.params.id;

    const todoItem = await TodosModel.findById(id).exec();
    todoItem.isCompleted = !todoItem.isCompleted;
    await todoItem.save();
    await getTodos();
    res.statusCode = 200;
    res.send(dbTodoLists);
});

api.delete("/todos", async (req, res) => {
    console.log(`${req.method}: ${req.headers.origin}${req.path}`);
    await TodosModel.deleteMany();
    await getTodos();
    res.statusCode = 200;
    res.send(dbTodoLists);
});

api.delete("/todos/:id", async (req, res) => {
    console.log(`${req.method}: ${req.headers.origin}${req.path}`);
    const id = req.params.id;
    console.log(id);

    await TodosModel.findByIdAndDelete(id);
    await getTodos();

    res.statusCode = 200;
    res.send(dbTodoLists);
});

// Start the server
api.listen(PORT, () => {
    console.log(`backend api running on port ${PORT}`);
});