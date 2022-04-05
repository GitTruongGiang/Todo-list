import React from "react";
import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  showTask,
  handlerCheckedTask,
  remove,
  handlerShowTask,
}) {
  return (
    <>
      <ul className="task-list">
        {tasks
          .filter((task) => (showTask ? task.status === false : true))
          .map((task) => (
            <TaskItem
              task={task}
              handlerCheckedTask={handlerCheckedTask}
              remove={remove}
            />
          ))}
      </ul>
      <div className="filter-wrapper">
        <label htmlFor="filter" className="filter-label">
          show incompleted tasks only
        </label>
        <input
          type="checkbox"
          id="filter"
          checked={showTask}
          onChange={handlerShowTask}
        />
      </div>
    </>
  );
}

export default TaskList;
