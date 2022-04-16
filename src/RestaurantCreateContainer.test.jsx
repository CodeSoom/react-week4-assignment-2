import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantCreateContainer from './RestaurantCreateContainer';

import restaurant from '../fixtures/restaurant';

describe('RestaurantCreateContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    restaurant,
  }));

  useDispatch.mockImplementation(() => dispatch);

  it('renders 등록 button', () => {
    const { queryByText } = render((
      <RestaurantCreateContainer />
    ));

    expect(queryByText(/등록/)).not.toBeNull();
  });

  it('listens for click event on 등록', () => {
    const { getByText } = render((
      <RestaurantCreateContainer />
    ));

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurant',
    });
  });

  it('renders name, category, address input', () => {
    const { queryByDisplayValue } = render((
      <RestaurantCreateContainer />
    ));

    expect(queryByDisplayValue('마법사식당')).not.toBeNull();
    expect(queryByDisplayValue('이탈리안')).not.toBeNull();
    expect(queryByDisplayValue('서울시 강남구')).not.toBeNull();
  });

  it('listens for chang evenet on update restaurant', () => {
    const { getByDisplayValue } = render((
      <RestaurantCreateContainer />
    ));

    fireEvent.change(
      getByDisplayValue('서울시 강남구'),
      { target: { value: '서울시 종로구' } },
    );

    expect(dispatch).toBeCalledWith({
      type: 'changeRestaurantField',
      payload: {
        name: 'address',
        value: '서울시 종로구',
      },
    });
  });
});
