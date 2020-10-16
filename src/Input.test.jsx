import React from 'react';

import { render,fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input',() => {
  const onChange = jest.fn();
  const onClick = jest.fn();
  
  const { container, getByText } = render((
    <Input
    name="마녀"
    categoryTitle="한식"
    addressTitle="서울시 강남구"
    onChnage={onChange}
    onClick={onClick} 
    />
  ));

  expect(getByText(/등록/)).not.toBeNull();
  
  fireEvent.click(getByText('등록'));

  expect(onClick).toBe('마녀 | 한식 | 서울시 강남구');
});