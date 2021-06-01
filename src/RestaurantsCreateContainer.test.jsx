import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RestaurantsCreateContainer from './RestaurantsCreateContainer';

jest.mock('react-redux');

test('RestaurantsCreateContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurants: [],
    restaurant: {
      name: '마녀',
      category: '한식',
      location: '서울시',
    },
  }));

  const { container, getByText, getByDisplayValue } = render(
    <RestaurantsCreateContainer />,
  );

  expect(getByDisplayValue('마녀')).not.toBeNull();
  expect(getByDisplayValue('한식')).not.toBeNull();
  expect(getByDisplayValue('서울시')).not.toBeNull();
  expect(container).toHaveTextContent('등록');

  fireEvent.change(getByDisplayValue('마녀'), {
    target: { value: '마녀주방' },
  });

  expect(dispatch).toBeCalledWith({
    type: 'changeRestaurantField',
    payload: {
      name: 'name',
      value: '마녀주방',
    },
  });

  fireEvent.click(getByText('등록'));

  expect(dispatch).toBeCalledWith({
    type: 'addRestaurant',
  });
});
