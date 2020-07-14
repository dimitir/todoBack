import mongoose from 'mongoose';

const Todo = new mongoose.Schema({
    todo: String,
    checked: Boolean,
});

export const TodoShema = mongoose.model("todo", Todo);


