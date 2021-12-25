import { render, fireEvent } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

test('RestaurantForm', () => {
  const handleClick = jest.fn();

  const { getByText } = render((
    <RestaurantForm
      onClick={handleClick}
    />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  fireEvent.click(getByText(/등록/));

  expect(handleClick).toBeCalled();
});
