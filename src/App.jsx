import React, { useState } from 'react';

import Input from './Input';

import List from './List';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    taskTitle: '',
    taskClassification: '',
    taskAddress: '',
    tasks: [
      {
        id: 1, title: '이름', classification: '분류', address: '주소',
      },
      {
        id: 2, title: '이름', classification: '분류', address: '주소',
      },
    ],
  });

  const {
    newId, taskTitle, taskClassification, taskAddress, tasks,
  } = state;

  function handleChangeTitle(event) {
    setState({
      ...state,
      taskTitle: event.target.value1,
      taskClassification: event.target.value2,
      taskAddress: event.target.value3,
    });
  }

  function handleClickAddTask() {
    setState({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      taskClassification: '',
      taskAddress: '',
      tasks: [...tasks, {
        id: newId, title: taskTitle, classification: taskTitle, address: taskTitle,
      }],
    });
  }
  return (
    <div>
      <h1>Restaurants</h1>
      <List tasks={tasks} />
      <Input
        value1={taskTitle}
        value2={taskClassification}
        value3={taskAddress}
        onChange={handleChangeTitle}
        onClick={handleClickAddTask}
      />
    </div>
  );
}
