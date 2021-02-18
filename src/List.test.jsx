import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it(' 예약 목록을 보여준다.', () => {
    const tasks = [
      {
        title: '마녀주방 | 한식 | 서울시 강남구',
        id: 1,
      },
      {
        title: '시카고피자 | 양식 | 이태원동',
        id: 2,
      },
    ];

    const { container } = render((
      <List tasks={tasks} />
    ));

    tasks.forEach((task) => {
      expect(container).toHaveTextContent(task.title);
    });
  });
});
