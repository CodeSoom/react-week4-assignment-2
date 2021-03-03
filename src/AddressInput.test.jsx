import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import AddressInput from './AddressInput';

describe('AddressInput', () => {
  it('changes inputs', () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render((
      <AddressInput
        adress=""
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByPlaceholderText(/주소/), {
      target: { value: '서울시 강남구' },
    });

    expect(handleChange).toBeCalled();
  });
});
