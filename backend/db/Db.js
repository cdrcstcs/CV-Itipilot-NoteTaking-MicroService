import mongoose from "mongoose";

MONGO_URL = "mongodb://localhost:27017/mongo-golang";
const Connection = mongoose.connect(MONGO_URL,()=>{
    console.log('Connected to DB');
})

export {Connection};


