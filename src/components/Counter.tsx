import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import selectCount from "../selectors/counter";
import {
    decrement,
    increment,
} from '../store/counterSlice'

const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <h1>Counter</h1>
                <span>{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
        </div>
    )

}

export default Counter;