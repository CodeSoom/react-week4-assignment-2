import React from 'react';

import { render } from '@testing-library/react';

import FormContainer from './FormContainer';

jest.mock();

describe('FormContainer', () => {
  it('renders inputs', () => {
    const { queryByPlaceholderText } = render(<FormContainer />);

    expect(queryByPlaceholderText('이름')).not.toBeNull();
    expect(queryByPlaceholderText('분류')).not.toBeNull();
    expect(queryByPlaceholderText('주소')).not.toBeNull();
  });

  it('renders "등록" button', () => {
    const { queryByText } = render(<FormContainer />);

    expect(queryByText('등록')).not.toBeNull();
  });
});
