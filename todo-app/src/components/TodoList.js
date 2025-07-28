import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleTask, deleteTask }) {
  if (tasks.length === 0)
    return <p className="empty">No tasks added yet.</p>;

  return (
    <div>
      {tasks.map((task, idx) => (
        <TodoItem
          key={idx}
          task={task}
          onToggle={() => toggleTask(idx)}
          onDelete={() => deleteTask(idx)}
        />
      ))}
    </div>
  );
}
export default TodoList;
