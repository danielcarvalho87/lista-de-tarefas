import React, { useState } from "react";
import { MdCheckCircle } from "react-icons/md";

import "./App.css";

const App = () => {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const initialList = [
    { id: 1, title: "titulo 1", checked: false },
    { id: 2, title: "titulo 2", checked: true },
    { id: 3, title: "titulo 3", checked: false },
  ];

  const [tasks] = useState(initialList);
  const [value, setValue] = useState("");

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    console.log("submit", value);
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
              <span className="titleList">{tasks.title}</span>
              <button className="remove" type="button">
                <MdCheckCircle size={40} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default App;
