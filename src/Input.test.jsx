import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input Component', () => {
  it('Initialize input information', () => {
    const handleChange = jest.fn();

    const inputTypes = {
      name: 'name',
      placeholder: '이름',
      value: '',
    };

    const { getByPlaceholderText } = render((
      <Input
        name={inputTypes.name}
        placeholder={inputTypes.placeholder}
        value={inputTypes.value}
        onChange={handleChange}
      />
    ));

    expect(getByPlaceholderText('이름')).not.toBeNull();

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '마녀주방' },
    });

    expect(handleChange).toBeCalled();
  });
});
