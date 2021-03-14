import React, { useState } from "react";

import { useListHotkeys } from "react-list-hotkeys";
import "react-list-hotkeys/dist/index.css";

const INITIAL_TODOS = [
  { text: "Go shopping 🛒", done: false },
  { text: "Make an awesome library 📚", done: true },
  { text: "Go on holiday 🌏", done: false },
  { text: "Break the market 💰", done: false },
  { text: "Write some code ✍", done: false },
  { text: "Build a rocket 🚀", done: false }
];

const App = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    const newItem = { ...newTodos[index] };
    newItem.done = !newItem.done;
    newTodos[index] = newItem;
    setTodos(newTodos);
  };

  const [selectedIndex, setSelectedIndex] = useListHotkeys(
    todos,
    ({ item, index }) => {
      console.log(`selected item:${item} index:${index}`);
      toggleTodo(index);
    }
  );

  return (
    <div>
      <h3>My Todos</h3>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className={index === selectedIndex ? "selected" : ""}>
              <input type="checkbox" checked={todo.done} readOnly />
              {todo.text}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
