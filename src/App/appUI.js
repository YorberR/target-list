import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';

function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodo,
}){
    return (
        <React.Fragment>
        <TodoCounter 
            total={totalTodos}
            completed={completedTodos}
        />
        <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        <TodoList>

            {error && <p>Desepérate, hubo un error...</p>}
            {loading && <p>Estamos cargandon, no deseperes...</p>}
            {!loading && !searchedTodos.length && <p>¡Crea tu pimer TODO!</p>}

            {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => toggleCompleteTodos(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>

        <CreateTodoButton/>


        </React.Fragment>
    );
}

export { AppUI };