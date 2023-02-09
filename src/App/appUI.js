import React from "react";
import { TodoContext } from "../components/todoContext";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoForm } from "../components/TodoForm";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal"

function AppUI() {
    const { 
        error,
        loading, 
        searchedTodos, 
        toggleCompleteTodos, 
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {error && <p>Desepérate, hubo un error...</p>}
            {loading && <p>Estamos cargandon, no deseperes...</p>}
            {!loading && !searchedTodos.length && <p>¡Crea tu pimer TODO!</p>}

            {searchedTodos.map((todo) => (
                <TodoItem
                    completed={todo.completed}
                    onComplete={() => toggleCompleteTodos(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>


        {openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}

        <CreateTodoButton 
            setOpenModal={setOpenModal}
        />
        </React.Fragment>
    );
}

export { AppUI };
