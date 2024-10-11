import React from "react";

function TodoItem({ todo, onToggleComplete, onRemove }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        title={todo.text}
      >
        {todo.text}
      </span>
      <div>
        <button onClick={onToggleComplete} style={{ marginLeft: "10px" }}>
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={onRemove} style={{ marginLeft: "10px" }}>
          Remove
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
