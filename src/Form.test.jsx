import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

describe('Form', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickAdd = jest.fn();
  const handleChangeRestaurantInfo = jest.fn();

  const renderForm = (restaurantInfo = { name: '', type: '', location: '' }) => render((
    <Form
      restaurantInfo={restaurantInfo}
      handleClickAdd={handleClickAdd}
      handleChangeRestaurantInfo={handleChangeRestaurantInfo}
    />
  ));

  it('이름 Input이 변화되면 handelChangeRestaurantName이 호출된다.', () => {
    const { getByPlaceholderText } = renderForm();
    const input = getByPlaceholderText('이름');

    expect(handleChangeRestaurantInfo).not.toBeCalled();
    fireEvent.change(input, { target: { value: '마녀식당' } });
    expect(handleChangeRestaurantInfo).toBeCalled();
  });

  it('분류 Input이 변화되면 handelChangeRestaurantName이 호출된다.', () => {
    const { getByPlaceholderText } = renderForm();
    const input = getByPlaceholderText('분류');

    expect(handleChangeRestaurantInfo).not.toBeCalled();
    fireEvent.change(input, { target: { value: '한식' } });
    expect(handleChangeRestaurantInfo).toBeCalled();
  });

  it('주소 Input이 변화되면 handelChangeRestaurantName이 호출된다.', () => {
    const { getByPlaceholderText } = renderForm();
    const input = getByPlaceholderText('주소');

    expect(handleChangeRestaurantInfo).not.toBeCalled();
    fireEvent.change(input, { target: { value: '서울시 강남구' } });
    expect(handleChangeRestaurantInfo).toBeCalled();
  });

  it('버튼에 "등록" 문구가 나온다.', () => {
    const { container } = renderForm();

    expect(container).toHaveTextContent('등록');
  });

  it('버튼이 클릭되면 handleClick이 호출된다.', () => {
    const { getByText } = renderForm();
    const buttonAdd = getByText('등록');

    expect(handleClickAdd).not.toBeCalled();
    fireEvent.click(buttonAdd);
    expect(handleClickAdd).toBeCalled();
  });

  context('restaurantInfo가 주어졌을 때', () => {
    const restaurantInfo = { name: '마녀주방', type: '한식', location: '서울시 강남구' };

    it('이름 Input에 주어진 입력 value가 출력된다.', () => {
      const { getByPlaceholderText } = renderForm(restaurantInfo);
      const input = getByPlaceholderText('이름');

      expect(input).toHaveDisplayValue(restaurantInfo.name);
    });

    it('분류 Input에 주어진 입력 value가 출력된다.', () => {
      const { getByPlaceholderText } = renderForm(restaurantInfo);
      const input = getByPlaceholderText('분류');

      expect(input).toHaveDisplayValue(restaurantInfo.type);
    });

    it('주소 Input에 주어진 입력 value가 출력된다.', () => {
      const { getByPlaceholderText } = renderForm(restaurantInfo);
      const input = getByPlaceholderText('주소');

      expect(input).toHaveDisplayValue(restaurantInfo.location);
    });
  });

  context('restaurantInfo가 주어지지 않을 때', () => {
    it('placeholder에 "이름" 문구가 나온다.', () => {
      const { getByPlaceholderText } = renderForm();

      expect(getByPlaceholderText('이름')).not.toBeNull();
    });

    it('placeholder에 "분류" 문구가 나온다.', () => {
      const { getByPlaceholderText } = renderForm();

      expect(getByPlaceholderText('분류')).not.toBeNull();
    });

    it('placeholder에 "주소" 문구가 나온다.', () => {
      const { getByPlaceholderText } = renderForm();

      expect(getByPlaceholderText('주소')).not.toBeNull();
    });
  });
});
