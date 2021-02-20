import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Restaurants');
  });

  it('renders text', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('자매수산');
  });
});
