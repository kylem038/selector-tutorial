import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../selectors/todo';

const TodoList = () => {
    const dispatch = useDispatch();

    const todos = useSelector(selectTodos);

    return (
        <div>
            <h3>To-Do List</h3>
            <div>
                <input type="text" placeholder='Add To-do' />
                <button type="submit" >Submit</button>
            </div>
            {todos && todos.map(todo => (
                <div>
                    <p>{todo.text}</p>
                </div>
            ))}
        </div>
    )
}

export default TodoList;