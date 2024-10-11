import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodoCompletion = (todoIndex) => {
    const updatedTodos = todos.map((todo, index) =>
      updateTodoCompletion(todo, index, todoIndex)
    );
    setTodos(updatedTodos);
  };

  const updateTodoCompletion = (todo, currentIndex, targetIndex) => {
    if (currentIndex !== targetIndex) return todo;
    return { ...todo, completed: !todo.completed };
  };

  const removeTodo = (todoIndex) => {
    const updatedTodos = todos.filter((_, index) =>
      isNotTargetIndex(index, todoIndex)
    );
    setTodos(updatedTodos);
  };

  const isNotTargetIndex = (currentIndex, targetIndex) =>
    currentIndex !== targetIndex;

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onToggleComplete={() => toggleTodoCompletion(index)}
            onRemove={() => removeTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
