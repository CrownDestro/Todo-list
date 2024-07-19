import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 w-full rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="What's the Mission"/>
        <button type="submit" className="bg-blue-400 text-white px-4 py-2 rounded ml-2">Annex</button>
      </form>
    );
  }

export default TodoForm;
