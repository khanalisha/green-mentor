const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    title: String,
    Description: String,
  },
  {
    timestamps: true,
  }
);

const TaskModel = mongoose.model("Task", TaskSchema);

module.exports = { TaskModel };
