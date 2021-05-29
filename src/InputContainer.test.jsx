import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import {
  addRestaurantInformation,
  updateAddress,
  updateCategory,
  updateName,
} from './actions';

jest.mock('react-redux');

describe('InputContainer 관련 테스트', () => {
  it('handleChangeName이 호출되는지 확인하는 테스트입니다', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      name: '시카고피자',
    }));

    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(
      getByPlaceholderText(/이름/),
      { target: { value: '시카고피자' } },
    );

    expect(dispatch).toBeCalledWith(updateName());
  });
});
