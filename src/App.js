import React, { useState, useEffect } from 'react';
import './App.css'
// Importing components
import Form from './components/Form'; 
import TodoList from './components/TodoList';

function App() {
  
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState(() => 
    JSON.parse(localStorage.getItem('todos')) ?? []
  );
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  useEffect(() => {  
    // Functions
    const filterHandler = () => {
      switch(status) {
        case 'completed': 
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    // Save local storage
    const saveLocalStorage = () => localStorage.setItem('todos', JSON.stringify(todos));
    
    filterHandler()
    saveLocalStorage()
  }, [todos, status])


  return (
    <div className="App">
      <div className='App-container'>
        <header>
          <h1>Todo list</h1>
        </header>
        <Form 
          inputText={inputText} 
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <TodoList 
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </div>
    </div>
  );
}

export default App; 
