import { render } from '@testing-library/react';

import { useSelector } from '../__mocks__/react-redux';

import App from './App';

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    nextId: 100,
    name: '',
    category: '',
    address: '',
    restaurants: [],
  }));

  const { getByText } = render(<App />);

  expect(getByText(/Restaurants/)).not.toBeUndefined();
});
