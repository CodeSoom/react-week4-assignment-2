import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders tasks', () => {
      const { getByText } = render((
        <List
          tasks={tasks}
        />
      ));

      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });
  });
  context('without tasks', () => {
    it('renders no task message', () => {
      const tasks = [];
      const { getByText } = render((
        <List
          tasks={tasks}
        />
      ));
      expect(getByText(/메뉴가 없어요/)).not.toBeNull();
    });
  });
});
