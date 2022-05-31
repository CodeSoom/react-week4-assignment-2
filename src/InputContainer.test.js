import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { addRestaurant, updateRestaurant } from './actions';
import InputContainer from './InputContainer';

import restaurant from '../fixtures/restaurant';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('displays the value', () => {
    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));

    const { getByDisplayValue, getByText } = render(<InputContainer />);

    expect(getByDisplayValue('마녀 주방')).toBeInTheDocument();
    expect(getByDisplayValue('한식')).toBeInTheDocument();
    expect(getByDisplayValue('서울시 강남구')).toBeInTheDocument();

    expect(getByText('등록')).toBeInTheDocument();
  });

  it('adds the restaurant', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));

    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText('등록'));

    expect(dispatch).toBeCalledWith(addRestaurant());
  });

  it('changes the name, category, address', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant,
    }));

    const { getByDisplayValue } = render(<InputContainer />);

    fireEvent.change(getByDisplayValue('마녀 주방'), { target: { value: '시카고 피자' } });

    expect(dispatch).toBeCalledWith(updateRestaurant({ name: 'name', value: '시카고 피자' }));

    fireEvent.change(getByDisplayValue('한식'), { target: { value: '양식' } });

    expect(dispatch).toBeCalledWith(updateRestaurant({ name: 'category', value: '양식' }));

    fireEvent.change(getByDisplayValue('서울시 강남구'), { target: { value: '이태원' } });

    expect(dispatch).toBeCalledWith(updateRestaurant({ name: 'address', value: '이태원' }));
  });
});
