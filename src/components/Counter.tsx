import { useSelector, useDispatch } from 'react-redux';
import { selectCount, selectDoubleCount } from "../selectors/counter";
import {
    decrement,
    increment,
} from '../store/counterSlice';
import '../styles/Counter.css';

const Counter = () => {
    const count = useSelector(selectCount);
    const countDoubled = useSelector(selectDoubleCount);
    const dispatch = useDispatch();

    return (
        <div className="CounterContainer">
            <h1>Counter</h1>
            <div className="Counter">
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

            <h2>Count Doubled</h2>
            <span>{countDoubled}</span>
        </div>
    )

}

export default Counter;