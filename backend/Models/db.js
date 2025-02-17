import mongoose from "mongoose";
const mongo_url=process.env.MONGO_STRING;

mongoose.connect(mongo_url)
.then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log("error connecting to db",err);

})