import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoryInput from './CategoryInput';

describe('CategoryInput', () => {
  it('changes inputs', () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render((
      <CategoryInput
        category=""
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByPlaceholderText(/분류/), {
      target: { value: '한식' },
    });

    expect(handleChange).toBeCalled();
  });
});
