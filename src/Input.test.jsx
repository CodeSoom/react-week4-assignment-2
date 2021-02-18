import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  function renderInput() {
    return render((
      <Input />
    ));
  }

  it('renders restaurant inputs', () => {
    const { getByPlaceholderText, getByText } = renderInput();

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();

    expect(getByText(/등록/)).not.toBeNull();
  });

  it('changes inputs', () => {
    const { getByPlaceholderText } = renderInput();

    fireEvent.change(getByPlaceholderText(/주소/), {
      target: { value: '서울시 강남구' },
    });

    expect(getByPlaceholderText(/주소/).value).toBe('서울시 강남구');
  });
});
