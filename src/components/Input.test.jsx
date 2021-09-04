import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders Input and listens chage event', () => {
    const inputTitles = {
      name: 'name',
      placeholder: '이름',
      value: '',
    };

    const handleChange = jest.fn();

    const { getByPlaceholderText } = render((
      <Input
        name={inputTitles.name}
        placeholder={inputTitles.placeholder}
        value={inputTitles.value}
        onChange={handleChange}
      />
    ));

    expect(getByPlaceholderText('이름')).toBeInTheDocument();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '마녀주방' },
    });

    expect(handleChange).toBeCalled();
  });
});
