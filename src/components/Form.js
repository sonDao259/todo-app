import React from "react";

function Form({inputText, setInputText, todos, setTodos, setStatus}) {
    const inputTextHandler = e => setInputText(e.target.value);
    const submitTodoHandler = e => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 10000,
            }
        ]);
        setInputText('');
    };
    const statusHandler = e => {
        setStatus(e.target.value)
    };

    return (
        <form className="form-container">
            <input
                className="input-block" 
                type='text'
                value={inputText}
                onChange={inputTextHandler}
            >
            </input>
            <button
                className="btn btn-submit" 
                type='submit'
                onClick={submitTodoHandler}
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="options-container">
                <select 
                    name="todos" 
                    onChange={statusHandler}
                >
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='uncompleted'>Uncompleted</option>
                </select>
            </div>
        </form>
    );
}
export default Form;
