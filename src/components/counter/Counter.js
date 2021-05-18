import {useSelector, useDispatch} from 'react-redux'
import React from 'react'
export const Counter = ()=>{
    const counter = useSelector((state) => state.counter);
     const dispatch = useDispatch();
    return (
        <>
<h3>Counter: {counter} </h3>
         <button onClick={() => {
             dispatch({type: 'INC'});
         }}>
             inc
         </button>

         <button
             onClick={() => {
                 dispatch({type: 'DEC'});
             }}>
             dec
         </button>

         <button
             onClick={() => {
                 dispatch({type: 'RESET'});
             }}>
             reset
         </button>
        </>
    )
}
