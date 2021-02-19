import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders input box', () => {
    const { getByPlaceholderText } = render(<Input />);

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
    expect(getByPlaceholderText(/분류/)).not.toBeNull();
    expect(getByPlaceholderText(/주소/)).not.toBeNull();

  })
})