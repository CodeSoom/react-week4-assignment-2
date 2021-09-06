import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

test('RestaurantForm', () => {
  const restaurant = {
    restaurants: {
      name: '시카고피자',
      category: '양식',
      address: '이태원동',
    },
  };

  const handleClick = jest.fn();

  const { getByText, getByDisplayValue } = render((
    <RestaurantForm
      restaurant={restaurant}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue(/시카고피자/)).not.toBeNull();
  expect(getByDisplayValue(/양식/)).not.toBeNull();
  expect(getByDisplayValue(/이태원동/)).not.toBeNull();
  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});
