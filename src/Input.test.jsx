import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('입력값을 확인합니다.', () => {
    const { getByPlaceholderText } = render((<Input />));

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
  });
});
