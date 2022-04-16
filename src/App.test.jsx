import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/restaurants';
import restaurant from '../fixtures/restaurant';

describe('App', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    restaurant,
    restaurants,
  }));

  useDispatch.mockImplementation(() => dispatch);

  it('renders restaurant', () => {
    const { queryByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledWith({
      type: 'setRestaurants',
      payload: { restaurants },
    });

    expect(queryByText(/김밥제국/)).not.toBeNull();
  });
});
