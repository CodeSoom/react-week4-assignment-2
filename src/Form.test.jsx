import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Form from './Form';

describe('Form Component', () => {
  it('send inputs information', () => {
    const handleChange = jest.fn();
    const handleClick = jest.fn();

    const inputs = [
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
      <Form
        inputs={inputs}
        onChange={handleChange}
        onClick={handleClick}
      />
    ));

    expect(getByPlaceholderText('이름')).not.toBeNull();
    expect(getByPlaceholderText('분류')).not.toBeNull();
    expect(getByPlaceholderText('주소')).not.toBeNull();

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
});
