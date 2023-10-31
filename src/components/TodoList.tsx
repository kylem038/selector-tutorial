import { useSelector, useDispatch } from 'react-redux';
import { filteredTodos } from '../selectors/todo';
import { addTodo, toggleTodoComplete, changeSearch } from '../store/todoSlice';
import { useState } from 'react';
import '../styles/Todos.css';

import { Todo } from '../store/todoSlice';

const TodoList = () => {
    const dispatch = useDispatch();
    const [todoText, setTodoText] = useState('');

    const todos = useSelector(filteredTodos);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch(addTodo({ id: new Date().getTime(), text: todoText, completed: false } as Todo));
        setTodoText('');
    }

    return (
        <div className="Todos">
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
                        value={todoText}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <input type="text" placeholder='Search To-dos' onChange={(e) => {
                    let {value} = e.target;
                    dispatch(changeSearch(value));
                }} />
            </div>
            <div>
                {todos && todos.length > 0 && todos.map(todo => (
                    <div className="Todo" key={todo.id}>
                        <p>{todo.text}</p>
                        <label>
                            <input 
                                defaultChecked={todo.completed} 
                                onChange={() => dispatch(toggleTodoComplete(todo.id))} 
                                type="checkbox" 
                            />
                            Complete
                        </label>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TodoList;