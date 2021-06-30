import React, { useState } from "react";
import "./Main.css";

// Form
import { FaPlus } from "react-icons/fa";

export default function Main() {
  const [tarefa, setTarefa] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setTarefa(e.target.value);
  }

  return (
    <div className="main">
      <h1>Lista de tarefas {tarefa}</h1>
      <form action="#" className="form">
        <input onChange={(e) => handleChange(e)} type="text" />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}
