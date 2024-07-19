import React, { useState } from 'react';

function Todo({ todo, index, removeTodo }) {
    return (
        <div className="flex justify-between items-center bg-white p-4 my-2 rounded-lg shadow-md">
        <span>{todo.text}</span>
        <button onClick={() => removeTodo(index)} className="bg-red-400 text-white px-4 py-2 rounded">Delete</button>
      </div>
    );
  }

export default Todo;
