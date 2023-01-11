import React, {useEffect} from "react";
import {Container, AppBar,Typography,Grow,Grid,} from "@mui/material";
//import Post from "./components/posts/post/post.js";
import Posts from "./components/posts/posts.js";
import Form from "./components/form/form.js";
//import {theme} from './styles.js';
import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
//import {ThemeProvider} from '@mui/material/styles'

const App =()=>{
    //const classes=useStyles();
    
    const dispatch=useDispatch();

    useEffect(()=>{  
        dispatch(getPosts());
    },[dispatch]);
    return (
       // <ThemeProvider theme={theme}>
        <Container maxWidth ="lg">
        <AppBar position="static" colour="inherit">
            <Typography  variant="h3" align ="center" >Musipedia</Typography>
            <Typography  variant="h6" align ="center" >A twitter for melophiles</Typography>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>

        </Grow>

    </Container>
 //   </ThemeProvider>
    )
    
    
}

export default App