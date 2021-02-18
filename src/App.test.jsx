import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/Restaurants/)).not.toBeNull();
  });

  it('renders restaurant inputs', () => {
    const { getByPlaceholderText } = render((
      <App />
    ));

    expect(getByPlaceholderText(/이름/)).not.toBeNull();
  });
});
