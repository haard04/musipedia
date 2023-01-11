export default (posts=[],action)=>{
    switch (action.type) {
        case 'CREATE':
            return [...posts,action.payload];
        case 'FETCH_ALL':
            return action.payload;
        case 'DELETE':
            return  posts.filter((post)=>post._id !== action.payload);
        default:
            return posts;
    }
}