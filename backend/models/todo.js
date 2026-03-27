const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodosSchema = new Schema({
    description: { type: String, required: true, maxLength: 100 },
    isCompleted: { type: Boolean, required: true },
});

module.exports = mongoose.model("todos", TodosSchema);