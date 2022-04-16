import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('renders restaurant', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(queryByText(/김밥제국/)).not.toBeNull();
  });
});
