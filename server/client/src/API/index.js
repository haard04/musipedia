import axios from "axios";

const url='https://musipediaback.onrender.com/posts';

export const fetchPosts =()=> axios.get(url);

export const createPosts =(newPost)=>axios.post(url,newPost);

export const deletePost=(id)=>axios.delete(`${url}/${id}`);