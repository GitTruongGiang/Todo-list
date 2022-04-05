import React from "react";

function TaskItem({ task, handlerCheckedTask, remove }) {
  return (
    <li key={task.id} className={task.status ? "done" : ""}>
      <div className="action">
        <input
          type="checkbox"
          className="btn btn-action-done"
          checked={task.status}
          onChange={(e) => handlerCheckedTask(task.id, e.target.checked)}
        />
        <span className="label">{task.title}</span>
      </div>
      <button className="btn btn-action-delete" onClick={() => remove(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
