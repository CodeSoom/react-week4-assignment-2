import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addRestaurant, updateAddress, updateCategory, updateName,
} from './actions';
import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('displays the value', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '마녀주방',
        category: '한식',
        address: '강남',
      },
    }));

    const { getByDisplayValue, getByText } = render(<InputContainer />);

    expect(getByDisplayValue('마녀주방')).toBeInTheDocument();
    expect(getByDisplayValue('한식')).toBeInTheDocument();
    expect(getByDisplayValue('강남')).toBeInTheDocument();

    expect(getByText('등록')).toBeInTheDocument();
  });

  it('adds the restaurant', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '마녀주방',
        category: '한식',
        address: '강남',
      },
    }));

    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith(addRestaurant());
  });

  it('changes the name, category, address', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        name: '마녀주방',
        category: '한식',
        address: '강남',
      },
    }));

    const { getByDisplayValue } = render(<InputContainer />);

    fireEvent.change(getByDisplayValue('마녀주방'), { target: { value: '시카고 피자' } });

    expect(dispatch).toBeCalledWith(updateName('시카고 피자'));

    fireEvent.change(getByDisplayValue('한식'), { target: { value: '양식' } });

    expect(dispatch).toBeCalledWith(updateCategory('양식'));

    fireEvent.change(getByDisplayValue('강남'), { target: { value: '이태원' } });

    expect(dispatch).toBeCalledWith(updateAddress('이태원'));
  });
});
