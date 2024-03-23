const express = require("express");
const { TaskModel } = require("../model/task.model");
const { auth } = require("../middleware/auth");
const Task = express.Router();

Task.post("/api/task", auth, async (req, res) => {
  const payload = req.body;
  try {
    const Tasks = new TaskModel(payload);
    await Tasks.save();
    res.status(201).json({ msg: "Task is added", Tasks });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

Task.get("/api/task", auth, async (req, res) => {
  const { title } = req.query;

  try {
    const Tasks = await TaskModel.find();

    res.status(200).json({ msg: "Task is added", Tasks });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

Task.patch("/api/task/:id", auth, async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const updateTask = req.body;

  try {
    const singleTask = await TaskModel.findByIdAndUpdate(
      { _id: id },
      updateTask,
      { new: true }
    );

    if (!singleTask) {
      res.status(400).json({ msg: "Task not updated" });
    }
    res.status(200).json({ mag: `Task Updated now of ${id}!`, singleTask });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

Task.delete("/api/task/:id", auth, async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const taskTitle = req.body.title;

  try {
    const deleteTask = await TaskModel.findByIdAndDelete({
      _id: id,
      taskTitle,
    });
    if (!deleteTask) {
      res.status(400).json({ msg: "Task not deleted" });
    }
    res.status(200).json({ mag: `Task Deleted now of  ${id}!`, deleteTask });
    // console.log(deleteTask);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = {
  Task,
};
