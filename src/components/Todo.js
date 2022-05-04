import React from "react";

function Todo({todo, text, id, todos, setTodos}) {
    // Events
    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== id))
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === id) {
                return {
                    ...item,
                    completed: !item.completed
                }
            }
            return item;
        }))
    };

    return (
        <div className="todo-item-block">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {text}
            </li>
            <div className="buttons-block">
                <button className="btn btn-check" onClick={completeHandler}>
                    <i className="fas fa-check"></i>
                </button>
                <button className="btn btn-delete" onClick={deleteHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default Todo