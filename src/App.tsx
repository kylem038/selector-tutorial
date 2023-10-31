import React from 'react';
import Counter from './components/Counter';
import './App.css';
import Profile from './components/Profile';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Profile/>
      <Counter/>
      <TodoList/>
    </div>
  );
}

export default App;
