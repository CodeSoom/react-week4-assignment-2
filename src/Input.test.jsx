import React from 'react';

import { render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
  const inputRender = () => render((
    <Input />
  ));
  const placeholderName = ['이름', '분류', '주소'];

  it('"input"이 존재하는지 확인한다.', () => {
    const { getByPlaceholderText } = inputRender();

    placeholderName.forEach((placeholder) => {
      expect(getByPlaceholderText(placeholder)).not.toBeNull();
    });
  });
});
