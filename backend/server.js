const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { getNotes, getNote, createNote, updateNote, deleteNote, getUserId } = require("./controllers/noteCtrl");
const jwt = require("jsonwebtoken");
const app = express();
const cookieParser = require('cookie-parser');

app.use(cors({
  origin:true,
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());
const URI = "mongodb://localhost:27017/mongo-golang";
const jwtSecret = 'fasefraw4r5r3wq45wdfgw34twdfg';

async function verifyToken(req, res, next) {
  try {

    console.log(req.cookies.usertoken);
      const token = req.cookies.usertoken;
      if (!token) {
          throw new Error('No token provided');
      }
      const userData = await new Promise((resolve, reject) => {
          jwt.verify(token, jwtSecret, {}, (err, decoded) => {
              if (err) {
                  reject(err);
              } else {
                  resolve(decoded);
              }
          });
      });
      req.user = userData;
      console.log(req.user);
      next(); 
  } catch (err) {
      res.status(401).send(err.message || 'Unauthorized');
  }
}
app.post('/note', verifyToken, createNote);
app.get('/note', verifyToken, getNotes);
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
