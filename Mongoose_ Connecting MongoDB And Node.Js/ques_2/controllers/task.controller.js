const Task = require("../models/task.model");

// CREATE
const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// READ
const getTasks = async (req, res) => {
  try {
    const filter = {};
    if (req.query.priority) filter.priority = req.query.priority.toLowerCase();
    if (req.query.status === "completed") filter.isCompleted = true;
    if (req.query.status === "pending") filter.isCompleted = false;

    const tasks = await Task.find(filter);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;

    if (update.isCompleted === true) {
      update.completionDate = new Date();
    }

    const task = await Task.findByIdAndUpdate(id, update, { new: true });
    if (!task) return res.status(404).json({ message: "Task not found" });

    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
const deleteTasks = async (req, res) => {
  try {
    const { priority } = req.query;
    if (!priority) return res.status(400).json({ message: "Priority query required" });

    const result = await Task.deleteMany({ priority: priority.toLowerCase() });
    res.json({ message: `${result.deletedCount} task(s) deleted.` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTasks,
};
