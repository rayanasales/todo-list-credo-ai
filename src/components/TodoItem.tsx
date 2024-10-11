import React from "react";
import { TodoItemProps } from "../types/TodoItemProps";

const TodoItemComponent: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onRemove,
}) => {
  return (
    <li
      title={todo.text}
      className={`todo-item ${todo.completed ? "completed" : ""}`}
    >
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <div>
        <button
          className="complete"
          onClick={onToggleComplete}
          style={{ marginLeft: "10px" }}
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          className="remove"
          onClick={onRemove}
          style={{ marginLeft: "10px" }}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default TodoItemComponent;
