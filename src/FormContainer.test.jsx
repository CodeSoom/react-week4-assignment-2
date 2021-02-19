import React from 'react';

import { render } from '@testing-library/react';

import FormContainer from './FormContainer';

jest.mock();

describe('FormContainer', () => {
  it('renders form', () => {
    const { queryByPlaceholderText } = render(<FormContainer />);
  });
});
