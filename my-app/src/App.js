import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

const Posts = () => {
    const {isLoading, posts,error} = useSelector(({isLoading, posts,error}) => ({
        isLoading, posts,error
    }));
    const dispatch = useDispatch();

    const fetchPosts = async () => {
        try {
            dispatch({type:'SET_IS_LOADING'});
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const payload = await response.json();
            dispatch({type: 'SET_POSTS', payload});
            dispatch({type: 'RESET_IS_LOADING'});
            dispatch({type: 'SET_ERROR',payload:'failed to fetch data'});
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    React.useEffect(() => {
        fetchPosts();
    }, []);
    if (error){
        return
            <h1>{error}</h1>
    }
    if (isLoading) {
        return
        <h1>Loading!!!!</h1>
    }
    return (
        <div>
        {posts.map(post => (<p key={post.id}>{post.title} - {post.body}</p>))}
    </div>
    )

};


function App() {
    return (
        <div className="App">
            <Posts/>
        </div>
    );
}

export default App;
