import React from 'react';

import { render } from '@testing-library/react';

import InputForm from './InputForm';

describe('Restaurants', () => {
  it('render inputs form', () => {
    const { getByPlaceholderText } = render(<InputForm />);

    expect(getByPlaceholderText('이름')).not.toBeNull();
    expect(getByPlaceholderText('분류')).not.toBeNull();
    expect(getByPlaceholderText('주소')).not.toBeNull();
  });
});
