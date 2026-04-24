const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  numbers: [Number],
  correctAnswer: Number
});

module.exports = mongoose.model("Question", questionSchema);