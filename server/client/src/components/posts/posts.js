import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/post.js";
import theme from './styles.js';
import { Grid,CircularProgress  } from "@mui/material";
import {ThemeProvider} from '@mui/material/styles'
const Posts=()=>{
    const posts=useSelector((state)=>state.posts)

    console.log(posts);
    return (
       !posts.length ? <CircularProgress />
       :(
        <ThemeProvider theme={theme}>
            <Grid container alignItems="stretch" spacing={3}>
            {posts.map((post)=>(
                <Grid  key={post._id } item xs={12} sm={6}>
                    <Post post={post}/>   
                 </Grid>
            ))}
            </Grid>
        </ThemeProvider>
        
       )
        
    );
}

export default Posts;