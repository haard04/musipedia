import mongoose from "mongoose";

const postSchema =mongoose.Schema({
    name:String,
    artist:String,
    album:String,
    link:String,
    description:String,
    language:String,
    // likeCount:{
    //     type:Number,
    //     default:0
    // }
});

const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;