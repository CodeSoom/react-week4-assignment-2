import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

import {
  updateAddress,
  updateCategory,
  updateName,
  addRestaurantInformation,
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

  it('handleChangeCategory이 호출되는지 확인하는 테스트입니다', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      category: '양식',
    }));

    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(
      getByPlaceholderText(/분류/),
      { target: { value: '양식' } },
    );

    expect(dispatch).toBeCalledWith(updateCategory());
  });

  it('handleChangeAddress이 호출되는지 확인하는 테스트입니다', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      address: '강남구',
    }));

    const { getByPlaceholderText } = render(<InputContainer />);

    fireEvent.change(
      getByPlaceholderText(/주소/),
      { target: { value: '강남구' } },
    );

    expect(dispatch).toBeCalledWith(updateAddress());
  });

  it('handleClickAddButton이 호출되는지 확인하는 테스트입니다', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      name: '시카고피자',
      category: '양식',
      address: '강남구',
      restaurants: [],
    }));

    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText(/등록/));

    expect(dispatch).toBeCalledWith(addRestaurantInformation());
  });
});
