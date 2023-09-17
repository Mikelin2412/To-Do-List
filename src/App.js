import React, { useState } from 'react';
import ToDoFormComponent from './components/ToDoForm';
import List from './components/List';

const allTasks = [];

const findTaskToDelete = (event) => {
  let index;
  allTasks.forEach((elem, i) => {
    if (+event.target.id === elem.id)
      index = i;
  });
  return index;
}

function App() {
  const [info, setInfo] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
      id: Date.now(),
      background: 'rgba(156, 131, 192, 0.85)',
      textDecoration: 'none',
      displayOfDescription: 'block',
    }));
  };

  const [allValues, setAllValues] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!info.description) return;
    if (info.description.trim() === '') return;
    if (info.detailedDescription !== undefined) {
      info.detailedDescription = (info.detailedDescription.trim() === '') ? null : info.detailedDescription;
    };
    allTasks.unshift(info);
    setAllValues(allTasks);
    setInfo({});
  };

  const handleClick = (event) => {
    let index = findTaskToDelete(event);
    allTasks.splice(index, 1);
    setAllValues((prev) => {
      return prev.filter((elem) => +event.target.id !== elem.id);
    });
  };

  const handleCheckOfTask = (event) => {
    let backgroundStyle = (event.target.checked) ? 'rgba(239, 228, 255, 0.85)' : 'rgba(156, 131, 192, 0.85)';
    let textDecorationStyle = (event.target.checked) ? 'line-through' : 'none';
    allValues.forEach((elem) => {
      if (+event.target.id === elem.id) {
        elem.background = backgroundStyle;
        elem.textDecoration = textDecorationStyle;
        setInfo((prev) => ({
          ...prev,
          background: backgroundStyle,
          textDecoration: textDecorationStyle,
        }));
      };
    });
  };

  const handleCheckOfDescription = (event) => {
    let displayOfDescription = (!event.target.checked) ? 'block' : 'none';
    allValues.forEach((elem) => {
      if (+event.target.id === elem.id) {
        elem.displayOfDescription = displayOfDescription;
        setInfo((prev) => ({
          ...prev,
          displayOfDescription: displayOfDescription,
        }));
      };
    });
  };

  const handleAllTasksButton = () => {
    setAllValues(allTasks);
  };

  const handleCompletedTasksButton = () => {
    setAllValues(() => {
      return allTasks.filter((elem) => elem.background === 'rgba(239, 228, 255, 0.85)');
    });
  };

  const handleUncompletedTasksButton = () => {
    setAllValues(() => {
      return allTasks.filter((elem) => elem.background === 'rgba(156, 131, 192, 0.85)');
    });
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <ToDoFormComponent
        info={info}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <List
        allValues={allValues}
        handleClick={handleClick}
        handleCheckOfTask={handleCheckOfTask}
        handleCheckOfDescription={handleCheckOfDescription}
        handleAllTasksButton={handleAllTasksButton}
        handleCompletedTasksButton={handleCompletedTasksButton}
        handleUncompletedTasksButton={handleUncompletedTasksButton}
      />
    </div>
  );
};

export default App;