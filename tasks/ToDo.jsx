import React, { useState } from "react";
import "./ToDo.css";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setPending([...pending, task]);
    setTask("");
  };

  const moveToCompleted = (index) => {
    const movedTask = pending[index];
    setCompleted([...completed, movedTask]);
    setPending(pending.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      <div className="inputRow">
        <input
          type="text"
          value={task}
          placeholder="Enter task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <h3>Pending Tasks</h3>
      <ul>
        {pending.map((item, index) => (
          <li key={index} className="pending" onClick={() => moveToCompleted(index)}>
            {item}
          </li>
        ))}
      </ul>

      <h3>Completed Tasks</h3>
      <ul>
        {completed.map((item, index) => (
          <li key={index} className="completed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
