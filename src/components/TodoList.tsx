import { useSelector, useDispatch } from 'react-redux';
import { selectTodos } from '../selectors/todo';
import { addTodo } from '../store/todoSlice';
import { useState } from 'react';

const TodoList = () => {
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState('');

    const todos = useSelector(selectTodos);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(addTodo({ id: new Date().getTime(), text: todoText, completed: false }));
    }

    return (
        <div>
            <h3>To-Do List</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Add To-do'
                        onChange={(e) => {
                            let { value } = e.target;
                            setTodoText(value);
                        }}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                {todos && todos.map(todo => (
                    <p key={todo.id}>{todo.text}</p>
                ))}
            </div>

        </div>
    )
}

export default TodoList;