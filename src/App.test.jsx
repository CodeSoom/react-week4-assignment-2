import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App Test', () => {
  it('Render Restaurants Title', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText(/Restaurants/)).not.toBeNull();
  });
});
