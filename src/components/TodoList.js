import React from "react";

//Importing components
import Todo from "./Todo";

function TodoList({todos, setTodos, filteredTodos}) {
    return (
        <div>
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo 
                        todo={todo}
                        text={todo.text} 
                        id={todo.id} 
                        key={todo.id}
                        
                        todos={todos}
                        setTodos={setTodos} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;