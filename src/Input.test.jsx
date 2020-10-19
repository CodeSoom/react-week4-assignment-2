import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input Component', () => {
  const inputs = {
    name: 'name',
    placeholder: '이름',
    value: '',
  };

  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Initialize input information', () => {
    const { getByPlaceholderText } = render((
      <Input
        name={inputs.name}
        placeholder={inputs.placeholder}
        value={inputs.value}
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
