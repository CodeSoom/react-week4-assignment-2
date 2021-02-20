import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const handleChange = jest.fn();

  it('입력값을 확인합니다.', () => {
    const { getByPlaceholderText, getByDisplayValue } = render((
      <Input
        value="기존 식당이름"
        onChange={handleChange}
      />));

    expect(getByPlaceholderText(/이름/)).not.toBeNull();

    expect(getByDisplayValue(/기존 식당이름/)).not.toBeNull();
    expect(handleChange).not.toBeCalled();
    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '마녀식당' },
    });
    expect(handleChange).toBeCalled();
  });
});
