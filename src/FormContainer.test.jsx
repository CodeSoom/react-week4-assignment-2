import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import FormContainer from './FormContainer';

jest.mock('react-redux');

describe('FormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    restaurantInfo: {
      name: '',
      type: '',
      location: '',
    },
    listRestaurantInfo: [],
  }));

  it('이름 Input의 값이 입력되면 updateRestaurantName action이 dispatch 됩니다.', () => {
    const { getByPlaceholderText } = render(<FormContainer />);
    const inputRestaurantName = getByPlaceholderText('이름');

    fireEvent.change(inputRestaurantName, { target: { value: '마녀주방' } });
    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantName',
      payload: '마녀주방',
    });
  });

  it('분류 Input의 값이 입력되면 updateRestaurantType action이 dispatch 됩니다.', () => {
    const { getByPlaceholderText } = render(<FormContainer />);
    const inputRestaurantType = getByPlaceholderText('분류');

    fireEvent.change(inputRestaurantType, { target: { value: '한식' } });
    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantType',
      payload: '한식',
    });
  });

  it('주소 Input의 값이 입력되면 updateRestaurantLocation action이 dispatch 됩니다.', () => {
    const { getByPlaceholderText } = render(<FormContainer />);
    const inputRestaurantLocation = getByPlaceholderText('주소');

    fireEvent.change(inputRestaurantLocation, { target: { value: '서울시 강남구' } });
    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurantLocation',
      payload: '서울시 강남구',
    });
  });

  it('등록 버튼을 클릭하면 addRestaurantInfo action이 dispatch 됩니다.', () => {
    const { getByPlaceholderText, getByText } = render(<FormContainer />);
    const buttonAdd = getByText('등록');

    fireEvent.click(buttonAdd);

    expect(dispatch).toBeCalledWith({
      type: 'addRestaurantInfo',
      payload: {
        name: '',
        type: '',
        location: '',
      },
    });
  });

  it('이름 Input의 값이 입력되면 이름 Input 값이 변화된다.', () => {
    const { getByPlaceholderText } = render(<FormContainer />);
    const inputRestaurantName = getByPlaceholderText('이름');

    fireEvent.change(inputRestaurantName, { target: { value: '마녀주방' } });
    expect(inputRestaurantName).toHaveDisplayValue('마녀주방');
  });

  it('분류 Input의 값이 입력되면 분류 Input 값이 변화된다.', () => {
    const { getByPlaceholderText } = render(<FormContainer />);
    const inputRestaurantType = getByPlaceholderText('분류');

    fireEvent.change(inputRestaurantType, { target: { value: '한식' } });
    expect(inputRestaurantType).toHaveDisplayValue('한식');
  });

  it('주소 Input의 값이 입력되면 주소 Input 값이 변화된다.', () => {
    const { getByPlaceholderText } = render(<FormContainer />);
    const inputRestaurantLocation = getByPlaceholderText('주소');

    fireEvent.change(inputRestaurantLocation, { target: { value: '서울시 강남구' } });
    expect(inputRestaurantLocation).toHaveDisplayValue('서울시 강남구');
  });

  it('등록 버튼을 클릭하면 List에 Input 값이 추가된다.', () => {
    const { container, getByPlaceholderText, getByText } = render(<FormContainer />);
    const inputRestaurantName = getByPlaceholderText('이름');
    const inputRestaurantType = getByPlaceholderText('분류');
    const inputRestaurantLocation = getByPlaceholderText('주소');
    const buttonAdd = getByText('등록');

    fireEvent.change(inputRestaurantName, { target: { value: '마녀주방' } });
    fireEvent.change(inputRestaurantType, { target: { value: '한식' } });
    fireEvent.change(inputRestaurantLocation, { target: { value: '서울시 강남구' } });
    fireEvent.click(buttonAdd);

    expect(container).toHaveTextContent('이름 | 분류 | 주소');
  });

  it('등록 버튼을 클릭하면 Input의 값이 초기화된다.', () => {
    const { getByPlaceholderText, getByText } = render(<FormContainer />);
    const inputRestaurantName = getByPlaceholderText('이름');
    const inputRestaurantType = getByPlaceholderText('분류');
    const inputRestaurantLocation = getByPlaceholderText('주소');
    const buttonAdd = getByText('등록');

    fireEvent.change(inputRestaurantName, { target: { value: '마녀주방' } });
    fireEvent.change(inputRestaurantType, { target: { value: '한식' } });
    fireEvent.change(inputRestaurantLocation, { target: { value: '서울시 강남구' } });
    fireEvent.click(buttonAdd);

    expect(inputRestaurantName).toHaveDisplayValue('');
    expect(inputRestaurantType).toHaveDisplayValue('');
    expect(inputRestaurantLocation).toHaveDisplayValue('');
  });
});
