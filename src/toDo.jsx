import React, { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // const someToDo = () => useTodo([1, 2, 3])

  const handleSubmit = () => {
    setTodos(() => todos.concat({
      text: input,
      id: Math.random(),
    }));
    setInput('');
  };

  const removeTodo = (id) => setTodos(() => todos.filter((t) => t.id !== id));

  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          placeholder="something"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={handleSubmit}
      >
Submit
      </button>
      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <button
              type="button"
              onClick={() => removeTodo(id)}
            >
x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
