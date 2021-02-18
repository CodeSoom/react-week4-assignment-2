import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders restaurant inputs', () => {
    const { getByPlaceholderText } = render((
      <Input />
    ));

    expect(getByPlaceholderText(/이름/)).not.toBeNull();

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '마녀주방' },
    });

    expect(getByPlaceholderText(/이름/).value).toBe('마녀주방');
  });
});
