import { render } from '@testing-library/react';
import List from './List';

test('List', () => {
  const { getByText } = render(<List
    datum={
      {
        name: 'name',
        category: 'category',
        address: 'address',
      }
    }
  />);
  expect(getByText('name')).not.toBeNull();
  expect(getByText('category')).not.toBeNull();
  expect(getByText('address')).not.toBeNull();
});
