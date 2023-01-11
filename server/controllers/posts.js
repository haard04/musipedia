
import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export  const getPosts=async (req,res)=>{
    try{
        const postMessages =await PostMessage.find();
        res.status(200).json(postMessages)
        return;
    }
    catch(error){
        res.status(404).json({message:error.message})
        return;
    }
}

export const createPosts= async (req,res)=>{
    const post=req.body;

    const newPost=new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
        return;
    } catch (error) {
        res.status(409).json({message:error.message})
        return;
    }
}

export const deletePost= async (req,res)=>{
    const {id}=req.params
 
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that Id');

    await PostMessage.findByIdAndRemove(id);

    res.json({message:'Post deleted Successfully'})

}