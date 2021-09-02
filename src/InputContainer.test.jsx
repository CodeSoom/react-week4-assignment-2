import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  // const handleChangeName = jest.fn();
  // const handleChangeCategory = jest.fn();
  // const handleChangeAddress = jest.fn();
  // const handleAddRestaurant = jest.fn();

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    nameText: '성원각',
    categoryText: '중식',
    addressText: '서울시 동작구',
  }));

  const { getByText, getByPlaceholderText } = render((
    <InputContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();
  expect(getByPlaceholderText(/이름/)).not.toBeNull();
  expect(getByPlaceholderText(/분류/)).not.toBeNull();
  expect(getByPlaceholderText(/주소/)).not.toBeNull();

  expect(getByPlaceholderText(/이름/)).toHaveDisplayValue(/성원각/);
  expect(getByPlaceholderText(/분류/)).toHaveDisplayValue(/중식/);
  expect(getByPlaceholderText(/주소/)).toHaveDisplayValue(/서울시 동작구/);

  // fireEvent.change(getByPlaceholderText(/이름/), {
  //   target: { value: '시골순두부' },
  // });

  // expect(handleChangeName).toBeCalled();

  // fireEvent.click(getByText(/등록/));

  // expect(handleAddRestaurant).toBeCalled();
});
