import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders Input', () => {
    const division = '이름';

    const { getByPlaceholderText } = render(<Input division={division} />);

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '중국집' },
    });

    expect(getByPlaceholderText('이름')).toHaveValue('중국집');
  });
});
