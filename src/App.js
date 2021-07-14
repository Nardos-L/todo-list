import ToDo from './components/ToDo';
import Results from './components/Results';
import React, { useState } from 'react';
import './App.css';

function App() {

  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  return (
    <div className="App">
      <ToDo task={task} setTask={setTask} allTasks={allTasks} setAllTasks={setAllTasks} />
      <Results allTasks={allTasks} setAllTasks={setAllTasks} task={task} />
    </div>
  );
}

export default App;
