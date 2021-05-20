import {useSelector, useDispatch} from 'react-redux'
import {
    setPosts,
    setError,
    setIsLoding
} from './'

export const usePostsFetcher = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setPosts(payload))
    }
}
export const usePostsSetLoading = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setIsLoding())
    }
}
export const usePostsSetError = () => {
    const dispatch = useDispatch();
    return (payload) => {
        dispatch(setError(payload));
    }
}