import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Page from './Page';

test('Page', () => {
  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();

  const tasks = [
    { id: 1, title: 'Task-1' },
    { id: 2, title: 'Task-2' },
  ];

  const { getByText } = render((
    <Page
      taskTitle="" // 입력한 값
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
    />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();

  fireEvent.click(getByText('등록'));

  expect(handleClickAddTask).toBeCalled();
});
