import React, { useState } from 'react';
import './Main.css';

export default function Main() {
  const [tarefa, setTarefa] = useState('');

  function handleChange(e) {
    e.preventDefault();
    setTarefa(e.target.value);
  }

  return (
    <div className="main">
      <h1>
        Lista de tarefas
        {' '}
        {tarefa}
      </h1>
      <form action="#">
        <input onChange={(e) => handleChange(e)} type="text" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
