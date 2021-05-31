import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

useSelector.mockImplementation((selector) => selector({
  restaurants: [],
}));

describe('App', () => {
  it('renders header', () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent('Restaurants');
  });
});
