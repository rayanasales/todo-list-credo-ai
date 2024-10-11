import { TodoItem } from "./TodoItem";

export interface TodoItemProps {
  todo: TodoItem;
  onToggleComplete: () => void;
  onRemove: () => void;
}
