import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from "../store/counterSlice";
import {
    decrement,
    increment,
    incrementByAmount,
  } from '../store/counterSlice'

const Counter = () => {
    const count = useSelector(selectCount);
    // const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h1>Counter</h1>
                <span>{count}</span>
            </div>
        </div>
    )

}

export default Counter;