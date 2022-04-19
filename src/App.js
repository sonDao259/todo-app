import React, { useEffect, useRef, useState } from 'react';
import './App.css';
function App() {
  const [label, setLabel] = useState("Nothing to do")
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const inputRef = useRef()
  const handleAdd = () => {
    inputRef.current.focus()
    setTask("")
    setLabel("Task(s): ")
    setTasks(prev => {
      return [...prev, task]
    })
  }
  const handleRemove = index => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    console.log(tasks.length);
    if (newTasks.length === 0) 
      setLabel("Nothing to do")
    return setTasks(newTasks)
  }
  useEffect(() => {
    console.log(tasks);
  }, [tasks])
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
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
          +
        </button>
        <ol className='list'>
          <p className="label">{label}</p>
          {tasks.map((task, index) => (
            <React.Fragment key = {index}>
                <li className = "list-item">{task}</li>
                <button 
                  onClick={() => handleRemove(index)}
                  className = "remove-btn"
                > 
                  &times;
                </button>
              </React.Fragment>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
