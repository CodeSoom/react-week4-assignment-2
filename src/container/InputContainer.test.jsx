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

  it('dispatches updateRestuarantName', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('restaurantName'), {
      target: { value: '시카고핏짜' },
    });

    expect(dispatch).toBeCalledWith({
      payload: { restaurantName: '시카고핏짜' },
      type: 'updateRestuarantName',
    });
  });

  it('dispatches updateRestuarantCategory', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('restuarantCategory'), {
      target: { value: '양식' },
    });

    expect(dispatch).toBeCalledWith({
      payload: { restuarantCategory: '양식' },
      type: 'updateRestuarantCategory',
    });
  });

  it('dispatches updateRestuarantAddress', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('restuarantAddress'), {
      target: { value: '서울시 강남구' },
    });

    expect(dispatch).toBeCalledWith({
      payload: { restuarantAddress: '서울시 강남구' },
      type: 'updateRestuarantAddress',
    });
  });
});
