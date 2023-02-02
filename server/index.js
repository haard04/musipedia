import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js"

const app=express();
const path= require("path")

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());


    app.use(express.static(path.join(__dirname,"./client/build")))

    app.get("*",function(req,res){
        res.sendFile(
            path.join(__dirname,"./client/build/index.html"),
            function(err){
                res.status(500).send(err)
            }
        );
    })




app.use('/posts',postRoutes);


const CONNECTION_URL ='mongodb+srv://haardshah04:hh05200324@cluster0.zql38pj.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT ||5000;
mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_URL , 
    { useNewUrlParser:true,useUnifiedTopology: true}
    )
    .then(()=> app.listen(PORT,()=> console.log(`Server Running on port:${PORT}`)))
    .catch((error)=>console.log(error.message));
