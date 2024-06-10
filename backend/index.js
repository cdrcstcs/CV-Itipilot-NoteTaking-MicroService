import express from "express";
import cors from "cors";
import { getAllNotes,getSingleNote,createNote,updateNote,deleteNote } from "./controllers/note";
import { Connection } from "./db/db";

const app=express()
app.use(express.json())
app.use(cors())
const PORT=4600
Connection;
app.post('/notes', createNote);
app.get('/notes', getAllNotes);
app.get('/notes/:id', getSingleNote);
app.put('/notes/:id', updateNote);
app.delete('/notes/:id', deleteNote);
app.listen(PORT,async()=>{
    try{
        await connection
        console.log(`Listening on port ${PORT}`)
    }catch(err){
        console.log("connection Failed")
        console.log(err)
    }
    
})
