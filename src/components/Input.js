function Input({task, onChange, className, placeholder}) {
    return (
        <input 
            value = {task}
            onChange = {onChange}
            className = {className}
            placeholder = {placeholder}
        />
    )
}
export default Input