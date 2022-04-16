import { fireEvent, render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

import restaurants from '../fixtures/restaurants';

const handleClick = jest.fn();

describe('RestaurantForm', () => {
  const renderRestaurantForm = () => render((
    <RestaurantForm
      onClick={handleClick}
    />
  ));

  it('renders 등록 button', () => {
    const { queryByText } = renderRestaurantForm();

    expect(queryByText(/등록/)).not.toBeNull();
  });

  it('listens for click event on 등록', () => {
    const { getByText } = renderRestaurantForm();

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText(/등록/));

    expect(handleClick).toBeCalled();
  });
});
