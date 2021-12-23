import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');
test('ListContainer', () => {
  useSelector.mockImplementation(((selector) => selector({
    data: [{
      id: 100,
      name: 'name',
      category: 'category',
      address: 'address',
    }],
  })));

  const { getByText } = render(<ListContainer />);

  expect(getByText('name')).not.toBeNull();
  expect(getByText('category')).not.toBeNull();
  expect(getByText('address')).not.toBeNull();
});
