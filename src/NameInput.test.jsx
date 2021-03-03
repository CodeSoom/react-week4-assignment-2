import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import NameInput from './NameInput';

describe('NameInput', () => {
  it('changes inputs', () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render((
      <NameInput
        name=""
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByPlaceholderText(/이름/), {
      target: { value: '마녀주방' },
    });

    expect(handleChange).toBeCalled();
  });
});
