import React, { useState } from "react";
import "./Todostyle.css";
function Todo() {
  const [tasks, setTasks] = useState([
    { id: "HTML and Css", title: "HTML and Css", status: false },
    { id: "Learn JS", title: "Learn JS", status: false },
    { id: "Code a Todo List", title: "Code a Todo List", status: false },
    { id: "react js", title: "react js", status: false },
  ]);
  const [valueTask, setValueTask] = useState("");
  const [showTask, setShowTask] = useState(false);
  function handlerSubmit(e) {
    e.preventDefault();
    if (valueTask) {
      const newTask = {
        id: Date.now(),
        title: valueTask,
        status: false,
      };
      setTasks([...tasks, newTask]);
      setValueTask("");
    }
  }
  function handlerChangeValue(e) {
    setValueTask(e.target.value);
  }
  function handlerCheckedTask(taskId, status) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status };
        }
        return task;
      })
    );
  }
  function handlerShowTask(e) {
    setShowTask(e.target.checked);
  }
  function remove(taskId) {
    setTasks(
      tasks.filter((task) => {
        if (task.id === taskId) {
          return "";
        }
        return task;
      })
    );
  }
  return (
    <div className="container">
      <div className="newdate">
        <p className="date Day">Day</p>
        <p className="date Week">Week</p>
        <p className="date Month">Month</p>
        <p className="date Year">Year</p>
      </div>
      <h1 className="title">
        Todo List
        <span>Get one item done at a time</span>
        <span>Get one item done at a time</span>
      </h1>
      <form autoComplete="off" className="form" onSubmit={handlerSubmit}>
        <input
          type="text"
          id="newitem"
          value={valueTask}
          onChange={handlerChangeValue}
        />
        <button className="submit" type="submit">
          ➕
        </button>
      </form>
      <ul className="task-list">
        {tasks
          .filter((task) => (showTask ? task.status === false : true))
          .map((task) => (
            <li key={task.id} className={task.status ? "done" : ""}>
              <div className="action">
                <input
                  type="checkbox"
                  className="btn btn-action-done"
                  checked={task.status}
                  onChange={(e) =>
                    handlerCheckedTask(task.id, e.target.checked)
                  }
                />
                <span className="label">{task.title}</span>
              </div>
              <button
                className="btn btn-action-delete"
                onClick={() => remove(task.id)}
              >
                Delete
              </button>
            </li>
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
      <div>hellooooo</div>
    </div>
  );
}

export default Todo;
