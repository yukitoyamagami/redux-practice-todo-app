import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import TodoListInput from './components/TodoListInput'

function App() {
  return (
    <div className="App">
      <h1>TODO一覧</h1>
      <TodoList />
      <h1>TODO追加</h1>
      <TodoListInput />
    </div>
  );
}

export default App;
<input />
