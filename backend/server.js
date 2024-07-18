import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { getNotes, getNote, createNote, updateNote, deleteNote } from "./controllers/noteCtrl.js";
const app = express();
import { getUser } from "./controllers/user.js";
import User from "./models/user.js";
import Image from "./models/image.js";
import Note from "./models/noteModel.js";
import 'dotenv/config';
import { generateImageData, generateUsers, generateNotes } from "./data.js";
app.use(cors({
  origin:true,
  credentials:true
}));
app.use(express.json());
app.post('/note',  
  createNote);
app.get('/note', 
  getNotes);
app.get('/note/:id', getNote);
app.put('/note/:id', updateNote);
app.delete('/note/:id', deleteNote);
app.get('/user', getUser);
mongoose.connect(process.env.URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  await Image.deleteMany();
  await User.deleteMany();
  await Note.deleteMany();
  await Image.insertMany(generateImageData());
  await User.insertMany(await generateUsers());
  await Note.insertMany(await generateNotes());
  app.listen(process.env.PORT, () => console.log(`Server running on PORT: ${process.env.PORT}`));
}).catch((error) => console.log(`${error} did not connect`));
