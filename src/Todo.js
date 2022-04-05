import React, { useState } from "react";
import Form from "./componer/Form";
import Header from "./componer/Header";
import Navbar from "./componer/Navbar";
import TaskList from "./componer/TaskList";
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
      <Navbar />
      <Header />
      <Form
        handlerChangeValue={handlerChangeValue}
        handlerSubmit={handlerSubmit}
        valueTask={valueTask}
      />
      <TaskList
        tasks={tasks}
        showTask={showTask}
        handlerCheckedTask={handlerCheckedTask}
        remove={remove}
        handlerShowTask={handlerShowTask}
      />
    </div>
  );
}

export default Todo;
