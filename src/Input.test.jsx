import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders', () => {
    const onChange = jest.fn();

    const { container } = render(<Input
      title="이름"
      placeholder="이름"
      onChange={onChange}
    />);

    expect(container).not.toBeNull();
  });
});
