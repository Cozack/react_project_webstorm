const initialState = {
    posts: [],
    isLoading: false,
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS':{
            return {
                ...state,
               posts:action.payload,
                isLoading: false
            }
        }
        case 'SET_IS_LOADING':{
            return {
                ...state,
                isLoading: true
            }
        }
        case 'RESET_IS_LOADING':{
            return {
                ...state,
                isLoading: false
            }
        }
        default:
            return state;
    }
}