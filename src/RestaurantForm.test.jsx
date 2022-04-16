import { fireEvent, render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

import restaurants from '../fixtures/restaurants';

const handleClick = jest.fn();

describe('RestaurantForm', () => {
  it('renders 등록 button', () => {
    const { queryByText } = render((
      <RestaurantForm
        onClick={handleClick}
      />
    ));

    expect(queryByText(/등록/)).not.toBeNull();
  });

  it('listens for click event on 등록', () => {
    const { getByText } = render((
      <RestaurantForm
        onClick={handleClick}
      />
    ));

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText(/등록/));

    expect(handleClick).toBeCalled();
  });
});
