import React from 'react';

import { render } from '@testing-library/react';

import InputForm from './InputForm';

describe('InputForm', () => {
  const { getByPlaceholderText } = render(<InputForm />);

  it('render inputs form', () => {
    expect(getByPlaceholderText('이름')).not.toBeNull();
    expect(getByPlaceholderText('분류')).not.toBeNull();
    expect(getByPlaceholderText('주소')).not.toBeNull();
  });
});
