import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectCount, selectDoubleCount } from "../selectors/counter";
import {
    decrement,
    increment,
} from '../store/counterSlice'

const Counter = () => {
    const count = useSelector(selectCount);
    const countDoubled = useSelector(selectDoubleCount);
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
                <h2>Count Doubled</h2>
                <span>{countDoubled}</span>
            </div>
        </div>
    )

}

export default Counter;