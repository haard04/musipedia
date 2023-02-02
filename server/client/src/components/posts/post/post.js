import React from "react";
import theme from "./styles";
import {ThemeProvider} from '@mui/material/styles'
import { Card,CardActions,CardContent,Button,Typography } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useDispatch } from 'react-redux';
import { deletePost } from "../../../actions/posts";

const Post=({post})=>{
    console.log(Post.name)
    const dispatch=useDispatch();
    return (
        
        <ThemeProvider theme={theme}>
            <Card>
                <CardContent>
                <div theme={theme.overlay}>
                    <Typography variant="h5" ><b>Name: {post.name}</b> </Typography>
                    <Typography variant="h6" > Artist:{post.artist}</Typography>
                    <Typography variant="h6" > Album:{post.album}</Typography>
                    <Typography variant="h6" > Language:{post.language}</Typography>
                    <Typography variant="h6" > Link:{post.link} </Typography>
                    <Typography variant="h6" > Description:{post.description}</Typography>
                    
                </div>
                <div theme ={theme.overlay2}>
                    <Button style={{color:'white'}} size='small' onClick={()=>{}}>
                        <MoreHorizIcon fontsize='defalt'/>
                    </Button>
                </div>
                </CardContent>
                <CardActions>
                    {/* <Button size="small" color="primary" onClick={()=>{}}>
                        <ThumbUpAltIcon fontsize="small"/>
                        Like 
                        {post.likeCount}
                    </Button> */}
                    <Button size="small" color="primary" onClick={()=>{dispatch(deletePost(post._id))}}>
                        <DeleteIcon fontsize="small"/>
                        Delete 
                
                    </Button>
                </CardActions>
            </Card>
        </ThemeProvider>
        
    );
}

export default Post;