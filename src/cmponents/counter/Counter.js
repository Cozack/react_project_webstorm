import {useDispatch, useSelector} from "react-redux";
import React from "react";

export const Counter = () => {
    const counter = useSelector((state) => state.counter);
    console.log(counter)
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(0);
    return (
        <>
            <h1>counter: {counter}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "INC" });
                }}
            >
                inc
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "DEC" });
                }}
            >
                dec
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "INC_HUNDRED" });
                }}
            >
                +100
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "DEC_HUNDRED" });
                }}
            >
                -100
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "RESET" });
                }}
            >
                reset
            </button>

            <input
                type="number"
                value={value}
                onChange={({ target: { value } }) => setValue(value)}
            />
            <button
                onClick={() => {
                    dispatch({ type: "INC_CUSTOM", payload: Number(value) });
                }}
            >
                INC CUSTOM
            </button>
        </>
    );
};