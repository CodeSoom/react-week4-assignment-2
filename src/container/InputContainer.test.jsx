import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

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
});
