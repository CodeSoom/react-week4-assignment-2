import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders Input', () => {
    const restaurantTitles = {
      name: 'name',
      placeholder: '이름',
      value: '',
    };

    const handleChange = jest.fn();

    const { getByPlaceholderText } = render((
      <Input
        name={restaurantTitles.name}
        placeholder={restaurantTitles.placeholder}
        value={restaurantTitles.value}
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
