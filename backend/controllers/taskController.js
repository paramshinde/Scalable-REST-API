const Task = require('../models/Task');

// Create Task
exports.createTask = async (req, res, next) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            user: req.user.id
        });

        res.status(201).json(task);
    } catch (err) {
        next(err);
    }
};

// Get My Tasks
exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};

// Update Task
exports.updateTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(task);
    } catch (err) {
        next(err);
    }
};

// Delete Task
exports.deleteTask = async (req, res, next) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });
    } catch (err) {
        next(err);
    }
};

// Admin: Get all tasks
exports.getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find().populate('user', 'email');
        res.json(tasks);
    } catch (err) {
        next(err);
    }
};
