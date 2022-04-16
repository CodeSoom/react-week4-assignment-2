import { fireEvent, render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

import restaurant from '../fixtures/restaurant';

const handleClick = jest.fn();

describe('RestaurantForm', () => {
  const renderRestaurantForm = () => render((
    <RestaurantForm
      restaurant={restaurant}
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

  it('renders restaurnt value', () => {
    const { queryByDisplayValue } = renderRestaurantForm();

    expect(queryByDisplayValue('마법사식당')).not.toBeNull();
    expect(queryByDisplayValue('이탈리안')).not.toBeNull();
    expect(queryByDisplayValue('서울시 강남구')).not.toBeNull();
  });
});
