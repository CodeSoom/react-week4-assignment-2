import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  it('add restaurant', () => {
    useSelector.mockImplementation((selector) => selector({
      name: 'Busan Rice', type: 'Korean', address: 'Busan Daeyeon',
    }));

    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByText(/등록/)).not.toBeNull();
    expect(getByDisplayValue(/Busan Rice/)).not.toBeNull();
  });
});
