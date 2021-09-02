import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('with tasks', () => {
    const tasks = [
      {
        id: 1, title: 'Task-1', classification: 'classification-1', address: 'address-1',
      },
      {
        id: 1, title: 'Task-2', classification: 'classification-2', address: 'address-2',
      },
    ];

    it('renders tasks', () => {
      const { getByText } = render((
        <List
          tasks={tasks}
        />
      ));

      expect(getByText(/Task-1classification-1address-1/)).not.toBeNull();
      expect(getByText(/Task-2classification-2address-2/)).not.toBeNull();
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
      expect(getByText(/레스토랑 정보가 없어요!/)).not.toBeNull();
    });
  });
});
