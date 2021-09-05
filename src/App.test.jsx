import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const { getByText } = render((<App restaurants={restaurants} />
  ));

  expect(dispatch).toBeCalledWith({
    type: 'setRestaurants',
    payload: { restaurants },
  });

  expect(getByText(/마녀주방/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/서울시 강남구/)).not.toBeNull();
});
