import React from 'react';

import App from "./App";

import { render } from '@testing-library/react';

describe('App', () => {
  it('renders title', () => {
    const { getByText } = render(<App />);

    const title = (getByText(/Restaurants/));

    expect(title).not.toBeNull();
  });
});
