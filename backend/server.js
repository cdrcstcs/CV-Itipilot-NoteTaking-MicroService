import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import { getNotes, getNote, createNote, updateNote, deleteNote } from "./controllers/noteCtrl.js";
// const jwt = require("jsonwebtoken");
const app = express();
import { getUser } from "./controllers/user.js";
import User from "./models/user.js";
import Image from "./models/image.js";
import Note from "./models/noteModel.js";
import { generateImageData, generateUsers, generateNotes } from "./data.js";
app.use(cors({
  origin:true,
  credentials:true
}));
app.use(express.json());
// app.use(cookieParser());
const URI = "mongodb://localhost:27017/mongo-golang";
// const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';

// async function verifyToken(req, res, next) {
//   try {

//     console.log(req.cookies.usertoken);
//       const token = req.cookies.usertoken;
//       if (!token) {
//           throw new Error('No token provided');
//       }
//       const userData = await new Promise((resolve, reject) => {
//           jwt.verify(token, jwtSecret, {}, (err, decoded) => {
//               if (err) {
//                   reject(err);
//               } else {
//                   resolve(decoded);
//               }
//           });
//       });
//       req.user = userData;
//       console.log(req.user);
//       next(); 
//   } catch (err) {
//       res.status(401).send(err.message || 'Unauthorized');
//   }
// }
app.post('/note', 
  // verifyToken, 
  createNote);
app.get('/note', 
  // verifyToken, 
  getNotes);
app.get('/note/:id', getNote);
app.put('/note/:id', updateNote);
app.delete('/note/:id', deleteNote);
// app.post('/:id', getUserId);
app.get('/user', getUser);
// mongoose.connect(
//   URI, (err) => {
//     if (err) throw err;
//     console.log("Connected to MongoDB.");
//   }
// );
const PORT = 4600;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

mongoose.connect(URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  await Image.deleteMany();
  await User.deleteMany();
  await Note.deleteMany();
  await Image.insertMany(generateImageData());
  await User.insertMany(await generateUsers());
  await Note.insertMany(await generateNotes());
  app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));
