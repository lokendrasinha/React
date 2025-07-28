import React from "react";

function TodoItem({ task, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <span className={task.completed ? "completed" : ""}>{task.text}</span>
      <div>
        <button onClick={onToggle} title="Complete">✅</button>
        <button onClick={onDelete} title="Delete">❌</button>
      </div>
    </div>
  );
}
export default TodoItem;
