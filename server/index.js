import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import path, { dirname } from "path";
import postRoutes from "./routes/posts.js"


const app=express();


app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());




const __dirname = path.dirname('./client');
const filePath = path.join(__dirname, './client');

const __dirname1 = path.dirname('./client/build/index.html');
const filePath1 = path.join(__dirname1, './client/build/index.html');

    app.use(express.static(filePath))

    app.get("*",function(req,res){
        res.sendFile(
            path.join(filePath1),
            function(err){
                res.status(500).send(err)
            }
        );
    })




app.use('/posts',postRoutes);


const CONNECTION_URL ='mongodb+srv://haardshah04:hh05200324@cluster0.zql38pj.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT ||5069;
mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_URL , 
    { useNewUrlParser:true,useUnifiedTopology: true}
    )
    .then(()=> app.listen(PORT,()=> console.log(`Server Running on port:${PORT}`)))
    .catch((error)=>console.log(error.message));
