import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RestaurantForm from '../src/RestaurantForm';

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
