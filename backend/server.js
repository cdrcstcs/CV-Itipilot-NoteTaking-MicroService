const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { getNotes, getNote, createNote, updateNote, deleteNote, getUserId } = require("./controllers/noteCtrl");
const app = express();
app.use(cors());
app.use(express.json());
const URI = "mongodb://localhost:27017/mongo-golang";
app.post('/note', createNote);
app.get('/note', getNotes);
app.get('/note/:id', getNote);
app.put('/note/:id', updateNote);
app.delete('/note/:id', deleteNote);
app.post('/:id', getUserId);

mongoose.connect(
  URI, (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB.");
  }
);
const PORT = 4600;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
