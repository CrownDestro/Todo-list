import './App.css';
import React, { useState } from 'react';
import Todo from './todo';
import TodoForm from './TodoForm';



function App() {
  const [todos, setTodos] = useState([
    { text: "Task 01", isCompleted: false },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="bg-neutral-400 min-h-screen flex flex-col items-center p-10">
      <header className="w-full max-w-xl mt-8 mb-6">
        <h1 className="text-5xl font-bold text-black text-center shadow-lg p-4 rounded-lg bg-opacity-50 bg-amber-400">Todo List</h1>
      </header>
      <div className="w-full max-w-xl bg-neutral-300 p-6 rounded-lg shadow-md">
        <TodoForm addTodo={addTodo} />
        <div className="mt-4">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
