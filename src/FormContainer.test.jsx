import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';
import FormContainer from './FormContainer';

jest.mock();

describe('FormContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      inputs: {
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },
    }));
  });

  it('renders inputs', () => {
    const { queryByDisplayValue } = render(<FormContainer />);

    expect(queryByDisplayValue('마녀주방')).not.toBeNull();
    expect(queryByDisplayValue('한식')).not.toBeNull();
    expect(queryByDisplayValue('서울시 강남구')).not.toBeNull();
  });

  it('renders "등록" button', () => {
    const { queryByText } = render(<FormContainer />);

    expect(queryByText('등록')).not.toBeNull();
  });
});
