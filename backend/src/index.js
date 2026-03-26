const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${DB_URL}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

const PORT = 3000;

const api = express();
api.use(express.json());

// Capture the new 
const dbTodoLists = [
    {
        id: 1,
        description: "Implement Remove Todo Item",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Implement Add Todo Item",
        isCompleted: false,
    },
    {
        id: 3,
        description: "Implement Complete Todo Item",
        isCompleted: false,
    },
];
let todoId = 4;

// Get all of the todo items
api.get("/todos", (req, res) => {
    res.send(dbTodoLists);
});

// Add a todo to the list 
api.post("/todos", (req, res) => {
    // Extract the text from the body...
    const todo = req.body.todo;

    // pretend that you are the database
    dbTodoLists.push({
        id: todoId,
        description: todo,
        isCompleted: false,
    });
    todoId++;

    res.statusCode = 201;
    res.send(dbTodoLists);
});

api.put("/todos/:id", (req, res) => {
    const id = req.params.id;

    const todoIndex = dbTodoLists.findIndex(todo => todo.id == id);

    if (todoIndex === -1) {
        res.statusCode = 400;
        res.send();
    }

    dbTodoLists[todoIndex].isCompleted = !dbTodoLists[todoIndex].isCompleted;

    res.statusCode = 200;
    res.send(dbTodoLists);
});

api.delete("/todos", (req, res) => {
    console.log("DELETE");
    res.statusCode = 204;
    // dbTodoLists = [];
    dbTodoLists.splice(0, dbTodoLists.length);
    res.send(dbTodoLists);
});

api.delete("/todos/:id", (req, res) => {
    console.log("DELETE");
    res.statusCode = 204;
    dbTodoLists = [];
    res.send(dbTodoLists);
});

// Start the server
api.listen(PORT, () => {
    console.log(`backend api running on port ${PORT}`);
});