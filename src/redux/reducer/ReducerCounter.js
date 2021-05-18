import {createStore} from "redux";


const initialState = {
    counter:0
}



const reducer = (state = initialState,action)=> {
    switch (action.type) {
        case "INC": {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case "DEC": {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case "Reset": {
            return {
                ...state,
                counter: 0
            }
        }
        default:
            return state
    }


}
export const store = createStore(reducer);