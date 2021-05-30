import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

jest.mock('react-redux');

test('RestaurantsCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
  }));

  const { container, getByText } = render(<RestaurantsCreateContainer />);

  expect(container).toHaveTextContent('등록');

  fireEvent.click(getByText('등록'));

  expect(dispatch).toBeCalledWith({
    type: 'addRestaurant',
  });
});
