import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('renders task', () => {
    useSelector.mockImplementation((selector) => selector({
      list: [
        {
          id: 1,
          name: '백암순대',
          category: '순댓국',
          address: '영등포구',
        },
      ],
    }));

    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText('백암순대|순댓국|영등포구')).not.toBeNull();
  });
});
