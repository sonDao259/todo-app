import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const handleJSON = () => {
  return JSON.parse(localStorage.getItem("tasks"))
}

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState(handleJSON ?? [])

  const inputRef = useRef()

  const handleAdd = () => {
    inputRef.current.focus()
    setTask("")
    setTasks(prev => {
      const newTasks = [...prev, task]
      localStorage.setItem("tasks", JSON.stringify(newTasks))
      return newTasks
    })
  }
  const handleRemove = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    return setTasks(newTasks)
  }
  useEffect(() => {
    console.log(tasks);
  }, [tasks])

  return (
    <div className="App">
      <div className="app-container">
        <h1>Todo App</h1>
        <hr></hr>
        <div className='data-input-box'>
          <input 
            value = {task}
            onChange = {(e) => setTask(e.target.value)}
            ref = {inputRef}
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
          {tasks.map((task, index) => (
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
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App; 
