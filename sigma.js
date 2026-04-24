const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

const port = 8080;
// const MONGO_URL = "mongodb://127.0.0.1:27017/Abacus";
const MONGO_URL = process.env.ATLASDB_URL;

// DB connect
async function main() {
  await mongoose.connect(MONGO_URL);
}

// Schema
const questionSchema = new mongoose.Schema({
  A: {
    values: [Number],
    correctAnswer: Number
  }
});

// ✅ Model yahi define karo
const Question = mongoose.model("Question", questionSchema);

// connect DB
main()
  .then(() => {
    console.log("connected to DB");
    insertData(); // 👉 DB connect hone ke baad insert karo
  })
  .catch((err) => console.log(err));

//Insert Data
async function insertData() {
  const q1 = new Question({
   A:async function insertData() {
  await Question.insertMany([
   { questionId: 1, values: [5,5,2,2,9], correctAnswer: 23 },
   { questionId: 2, values: [8,4,-6,-3,7], correctAnswer: 10 },
  { questionId: 3, values: [2,6,5,3,6], correctAnswer: 22 },
   { questionId: 4, values: [5,6,9,3,-9], correctAnswer: 14 },
    { questionId: 5, values: [1,1,5,4,2], correctAnswer: 13 },
  { questionId: 6, values: [2,4,1,5,7], correctAnswer: 19 },
   { questionId: 7, values: [6,7,-5,-2,6], correctAnswer: 12 },
   { questionId: 8, values: [2,7,2,7,5], correctAnswer: 23 },
    { questionId: 9, values: [5,1,-5,3,7], correctAnswer: 11 },
    { questionId: 10, values: [1,9,5,9,5], correctAnswer: 29 },
    
  ]);

  console.log("Data saved ✅");
}
  });

  await q1.save();
  console.log("Data saved ✅");
}
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});