import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {},
  }));

  const { queryByText } = render((
    <App />
  ));

  it('App이 랜더링된다', () => {
    expect(dispatch).toBeCalledWith({
      type: 'setRestaurants',
      payload: { restaurants: [] },
    });

    expect(queryByText(/맛나분식/)).toBeNull();
  });
});
