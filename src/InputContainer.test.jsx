import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    name: '마녀주방',
    sort: '한식',
    address: '서울시 강남구',
  }));

  const { getByText, getByDisplayValue } = render((
    <InputContainer />
  ));

  expect(getByText(/등록/)).not.toBeNull();
  expect(getByDisplayValue(/마녀주방/)).not.toBeNull();
  expect(getByDisplayValue(/한식/)).not.toBeNull();
  expect(getByDisplayValue(/서울시 강남구/)).not.toBeNull();

  fireEvent.click(getByText(/등록/));

  expect(dispatch).toBeCalledWith({ type: 'addRestaurant' });
});
