import React from 'react';
import './CreateTodo.css';

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg)
    };
    
    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };