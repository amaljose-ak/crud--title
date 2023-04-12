
const express =require('express')
const mongoose=require('mongoose')
require("dotenv/config")
const postRouter=require("./routes/post")
const bodyParser=require("body-parser")


const app=express();
// middleware

app.use(bodyParser.json())

// routes middleware
app.use("/post",postRouter)

mongoose.connect(process.env.DB_CONFIG)
.then(()=>{
    console.log("connected to Data Base");
}).catch((err)=>{
    console.log(err);
})
const PORT=process.env.PORT

app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`);
})

