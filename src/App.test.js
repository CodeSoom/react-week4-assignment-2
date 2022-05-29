import { render } from '@testing-library/react';
import { useSelector } from '../__mocks__/react-redux';

import App from './App';

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {
      name: '',
      category: '',
      address: '',
    },
  }));

  const { container } = render(<App />);

  expect(container).toHaveTextContent('Restaurants');
});
