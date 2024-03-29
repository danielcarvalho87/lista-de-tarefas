import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

import "./App.css";

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    // console.log("submit", value);
    setTasks([
      ...tasks,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
    erase();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  const onToggle = (task) => {
    setTasks(
      tasks.map((obj) =>
        obj.id === task.id ? { ...obj, checked: !task.checked } : obj
      )
    );
  };

  const onRemove = (task) => {
    setTasks(tasks.filter((obj) => obj.id !== task.id));
  };

  return (
    <>
      <header className="App-header">
        <h1>Lista de tarefas</h1>
      </header>
      <p>&nbsp;</p>
      <section className="container">
        <section className="main">
          <input
            className="NewItem"
            placeholder="O que precisa ser feito?"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </section>
        <ul className="MainList">
          {tasks.map((tasks) => (
            <li key={tasks.id.toString()}>
              <span
                className={["titleList", tasks.checked ? "checked" : ""].join(
                  " "
                )}
                onClick={() => onToggle(tasks)}
                onKeyPress={() => onToggle(tasks)}
                role="button"
                tabIndex={0}
              >
                {tasks.title}
              </span>
              <button className="remove" onClick={() => onRemove(tasks)}>
                <MdDelete size={40} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
