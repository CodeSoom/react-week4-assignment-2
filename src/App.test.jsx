import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders inputs', () => {
    const { getByText } = render(<App />);
  });
});
