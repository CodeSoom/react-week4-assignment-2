import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import addRestaurant from './actions';
import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      name: '마녀주방',
      category: '한식',
      address: '강남',
    },
  }));

  it('displays the value', () => {
    const { getByDisplayValue, getByText } = render(<InputContainer />);

    expect(getByDisplayValue('마녀주방')).toBeInTheDocument();
    expect(getByDisplayValue('한식')).toBeInTheDocument();
    expect(getByDisplayValue('강남')).toBeInTheDocument();

    expect(getByText('등록')).toBeInTheDocument();
  });

  it('adds the restaurant', () => {
    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith(addRestaurant());
  });
});
