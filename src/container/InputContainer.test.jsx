import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantName: '카레맛집',
    restaurantCategory: '일식',
    restaurantAddress: '서울시 서초구',
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches updateRestaurantName', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('restaurantName'), {
      target: { value: '시카고핏짜' },
    });

    expect(dispatch).toBeCalledWith({
      payload: { restaurantName: '시카고핏짜' },
      type: 'updateRestaurantName',
    });
  });

  it('dispatches updateRestaurantCategory', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('restaurantCategory'), {
      target: { value: '양식' },
    });

    expect(dispatch).toBeCalledWith({
      payload: { restaurantCategory: '양식' },
      type: 'updateRestaurantCategory',
    });
  });

  it('dispatches updateRestaurantAddress', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('restaurantAddress'), {
      target: { value: '서울시 강남구' },
    });

    expect(dispatch).toBeCalledWith({
      payload: { restaurantAddress: '서울시 강남구' },
      type: 'updateRestaurantAddress',
    });
  });

  it('selects restaurantName', () => {
    const { getByDisplayValue } = render(<InputContainer />);

    expect(getByDisplayValue(/카레맛집/)).not.toBeNull();
  });

  it('selects restaurantCategory', () => {
    const { getByDisplayValue } = render(<InputContainer />);

    expect(getByDisplayValue(/일식/)).not.toBeNull();
  });

  it('selects restaurantAddress', () => {
    const { getByDisplayValue } = render(<InputContainer />);

    expect(getByDisplayValue(/서울시 서초구/)).not.toBeNull();
  });

  it('adds a restaurant', () => {
    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
  });
});
