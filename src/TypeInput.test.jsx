import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TypeInput from './TypeInput';

describe('TypeInput', () => {
  it('changes inputs', () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render((
      <TypeInput
        type=""
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByPlaceholderText(/분류/), {
      target: { value: '한식' },
    });

    expect(handleChange).toBeCalled();
  });
});
