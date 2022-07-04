import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import {
  restaurantAdress, restaurantName, restaurants, restaurantType,
} from './fixtures/restaurant';

import RestaurantFormContainer from './RestaurantFormContainer';

jest.mock('react-redux');

describe('RestaurantFormContainer', () => {
  const dispathch = jest.fn();

  useDispatch.mockImplementation(() => dispathch);

  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  const renderRestaurantFormContainer = () => render((
    <RestaurantFormContainer />
  ));

  it('restaurantName - change 이벤트를 listen한다', () => {
    const { getByPlaceholderText } = renderRestaurantFormContainer();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: restaurantName },
    });

    expect(dispathch).toBeCalled();

    expect(restaurants[0].name).toBe(restaurantName);
  });

  it('restaurantType - change 이벤트를 listen한다', () => {
    const { getByPlaceholderText } = renderRestaurantFormContainer();

    fireEvent.change(getByPlaceholderText('분류'), {
      target: { value: restaurantType },
    });

    expect(dispathch).toBeCalled();

    expect(restaurants[0].type).toBe(restaurantType);
  });

  it('restaurantAdress - change 이벤트를 listen한다', () => {
    const { getByPlaceholderText } = renderRestaurantFormContainer();

    fireEvent.change(getByPlaceholderText('주소'), {
      target: { value: restaurantAdress },
    });

    expect(dispathch).toBeCalled();

    expect(restaurants[0].adress).toBe(restaurantAdress);
  });

  it('등록버튼 - click 이벤트를 listen한다', () => {
    const { getByText } = renderRestaurantFormContainer();

    fireEvent.click(getByText('등록'), 1);

    expect(dispathch).toBeCalled();

    expect(restaurants[0].id).toBe(1);
  });
});
