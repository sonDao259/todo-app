import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const handleAdd = () => {
    setTask("")
    setTasks(prev => {
      return [...prev, task]
    })
  }
  const handleRemove = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    return setTasks(newTasks)
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1>Todo App</h1>
        <hr></hr>
        <div className='data-input-box'>
          <Input
            task = {task}
            onChange = {(e) => setTask(e.target.value)}
            className = "input-box"
            placeholder = "Add task here..."
          />
          <button 
            onClick={handleAdd}
            className = "submit-btn"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <ul className='list'>
          {
            tasks.map((task, index) => (
              <React.Fragment key = {index}>
                <li className = "list-item">
                  <div className='content-block'>
                    {task}
                  </div>
                  <div className='edit-block'>
                    <button 
                      onClick={() => handleRemove(index)}
                      className = "remove-btn"
                    > 
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                </li>
              </React.Fragment>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App; 
