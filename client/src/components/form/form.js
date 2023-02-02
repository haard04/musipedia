import React , {useState} from "react";
import { TextField, Typography,Button,Paper } from "@mui/material";
import theme from './styles.js';
import { useDispatch } from "react-redux";
import {createPosts} from "../../actions/posts.js"

import {ThemeProvider} from '@mui/material/styles'
const Form=()=>{
    const [postData,setPostData]=useState({
        name:'' ,artist:'',album:'',link:'',description:'',language:''
    });
    
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createPosts(postData));
        
    }

    const clear=()=>{
        setPostData({ name: '', artist: '', album: '', language: '', description: '' ,link:''});
    }

    return (
        <ThemeProvider theme={theme}>
        <Paper >
            <form noValidate  autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h6">Creating Post</Typography>
                <TextField 
                    name="name" 
                    variant="outlined" 
                    label="Name" 
                    fullWidth 
                    value={postData.name}
                    onChange={(e)=>setPostData({...postData ,name:e.target.value})}
                />
                <TextField 
                    name="artist" 
                    variant="outlined" 
                    label="Artist" 
                    fullWidth 
                    value={postData.artist}
                    onChange={(e)=>setPostData({...postData ,artist:e.target.value})}
                />
                <TextField 
                    name="album" 
                    variant="outlined" 
                    label="Album" 
                    fullWidth 
                    value={postData.album}
                    onChange={(e)=>setPostData({...postData ,album:e.target.value})}
                />
                <TextField 
                    name="link" 
                    variant="outlined" 
                    label="Link" 
                    fullWidth 
                    value={postData.link}
                    onChange={(e)=>setPostData({...postData ,link:e.target.value})}
                />
                <TextField 
                    name="description" 
                    variant="outlined" 
                    label="Description" 
                    fullWidth 
                    value={postData.description}
                    onChange={(e)=>setPostData({...postData ,description:e.target.value})}
                />
                <TextField 
                    name="language" 
                    variant="outlined" 
                    label="Language" 
                    fullWidth 
                    value={postData.language}
                    onChange={(e)=>setPostData({...postData ,language:e.target.value})}
                />
                <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>

        </Paper>
        </ThemeProvider>
    );
}

export default Form;