import {createStore} from "redux";

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case "INC": {
            return {
                ...state,
                counter: state.counter + 1
            };
        }
        case "DEC": {
            return {
                ...state,
                counter: state.counter - 1
            };
        }
        case "INC_HUNDRED": {
            return {
                ...state,
                counter: state.counter +100
            };
        }
        case "DEC_HUNDRED": {
            return {
                ...state,
                counter: state.counter - 100
            };
        }
        case "RESET": {
            return {
                ...state,
                counter: 0
            };
        }
        case "INC_CUSTOM": {
            return {
                ...state,
                counter: state.counter + action.payload
            };
        }
        default:
            return state;
    }
};
export const store = createStore(reducer);