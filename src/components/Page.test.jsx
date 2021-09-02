import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Page from './Page';

test('Page', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const restaurantTitles = [
    {
      name: 'name',
      placeholder: '이름',
      value: '',
    },
    {
      name: 'category',
      placeholder: '분류',
      value: '',
    },
    {
      name: 'address',
      placeholder: '주소',
      value: '',
    },
  ];

  const { getByPlaceholderText } = render((
    <Page
      restaurantTitles={restaurantTitles}
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(getByPlaceholderText('이름')).toBeInTheDocument();
  expect(getByPlaceholderText('분류')).toBeInTheDocument();
  expect(getByPlaceholderText('주소')).toBeInTheDocument();

  fireEvent.change(getByPlaceholderText('이름'), {
    target: { value: '마녀주방' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.change(getByPlaceholderText('분류'), {
    target: { value: '한식' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.change(getByPlaceholderText('주소'), {
    target: { value: '서울시 강남구' },
  });

  expect(handleChange).toBeCalled();
});
