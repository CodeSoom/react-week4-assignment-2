import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const onChange = jest.fn();
  const onClick = jest.fn();

  const { getByText, getByPlaceholderText } = render((
    <Input
      name="마녀"
      categoryTitle="한식"
      addressTitle="서울시 강남구"
      placeholer="이름"
      placeholer="분류"
      placeholer="주소"
      onChnage={onChange}
      onClick={onClick}
    />
  ));

  expect(getByText(/등록/)).not.toBeNull();

  const placeholder1 = getByPlaceholderText('이름');
  const placeholder2 = getByPlaceholderText('분류');
  const placeholder3 = getByPlaceholderText('주소');

  expect(placeholder1.value).toBe('마녀');

  expect(placeholder2.value).toBe('한식');

  expect(placeholder3.value).toBe('서울시 강남구');

  fireEvent.click(getByText('등록'));
});
