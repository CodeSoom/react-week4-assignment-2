import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  it('renders task', () => {
    const list = [
      {
        id: 1,
        name: '백암순대',
        category: '순댓국',
        address: '영등포구',
      },
    ];

    const { getByText } = render((
      <List list={list} />
    ));

    expect(getByText('백암순대|순댓국|영등포구')).not.toBeNull();
  });
});
