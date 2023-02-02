import * as api from '../API';

export const getPosts=()=> async (dispatch) => {

    try {
        const {data} =await api.fetchPosts();
        dispatch({type:'FETCH_ALL',payload:data })
    } catch (error) {
        console.log(error.message);
    }

}

export const createPosts= (post)=> async (dispatch) =>{
    try {
        const {data} =await api.createPosts(post);
        dispatch({type:'CREATE',payload:data })
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost =(id)=> async (dispatch) =>{
    try {
        await api.deletePost(id);
        dispatch({type:'DELETE',payload:id})
    } catch (error) {
        console.log('error');
    }
}