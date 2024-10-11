import React, { useState, ChangeEvent } from "react";
import TodoItemComponent from "./components/TodoItem";
import { TodoItem } from "./types/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = (): void => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTodoCompletion = (todoIndex: number): void => {
    const updatedTodos = todos.map((todo, index) =>
      updateTodoCompletion(todo, index, todoIndex)
    );
    setTodos(updatedTodos);
  };

  const updateTodoCompletion = (
    todo: TodoItem,
    currentIndex: number,
    targetIndex: number
  ): TodoItem => {
    if (currentIndex !== targetIndex) return todo;
    return { ...todo, completed: !todo.completed };
  };

  const removeTodo = (todoIndex: number): void => {
    const updatedTodos = todos.filter((_, index) =>
      isNotTargetIndex(index, todoIndex)
    );
    setTodos(updatedTodos);
  };

  const isNotTargetIndex = (
    currentIndex: number,
    targetIndex: number
  ): boolean => currentIndex !== targetIndex;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <TodoItemComponent
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
