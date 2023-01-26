// import './App.css';

const todos = [
  { text: 'Comer el almuerzo', completed: false },
  { text: 'Tomar curso de react', completed: false },
  { text: 'Irme a casa', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <h2>Has completados 2 de tus 3 cursos</h2>
      <TodoSearch />
      <input placeholder="Cebolla"/>

      <TodoList>

        {todos.map(todo => (
          <TodoItem />
        ))}
      </TodoList>

      <CreateTodoButton/>

      <button>+</button>
    
    </React.Fragment>
  );
}

export default App;
