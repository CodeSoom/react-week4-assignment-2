import React from 'react';

import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  const inputRender = () => render((
    <Input />
  ));

  it('"input"이 존재하는지 확인한다.', () => {
    const { getByPlaceholderText } = inputRender();

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();
  });
});
