import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {
    usePostsFetcher,
    usePostsSetLoading,
    usePostsSetError
} from './redux'



const Posts = () => {
    const {isLoading, posts, error} = useSelector(({isLoading, posts, error}) => ({
        isLoading, posts, error
    }));
    const postFetcher = usePostsFetcher();
    const postLoading = usePostsSetLoading();
    const postError = usePostsSetError();

    const fetchPosts = async () => {
        try {
            postLoading();
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const payload = await response.json();
            // dispatch(setPosts(payload));
           postFetcher(payload);
        } catch (e) {
            postError('failed to fetch data');
        }
    }

    React.useEffect(() => {
        fetchPosts();
    }, []);
    if (error) {
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
