import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('renders', () => {
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
});
