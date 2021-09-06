import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '카레맛집',
      category: '일식',
      address: '서울시 서초구',
    },
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
      payload: { name: 'name', value: '시카고핏짜' },
      type: 'updateRestaurantField',
    });
  });

  it('dispatches updateRestaurantCategory', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('restaurantCategory'), {
      target: { value: '양식' },
    });

    expect(dispatch).toBeCalledWith({
      payload: { name: 'category', value: '양식' },
      type: 'updateRestaurantField',
    });
  });

  it('dispatches updateRestaurantAddress', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('restaurantAddress'), {
      target: { value: '서울시 강남구' },
    });

    expect(dispatch).toBeCalledWith({
      payload: { name: 'address', value: '서울시 강남구' },
      type: 'updateRestaurantField',
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
