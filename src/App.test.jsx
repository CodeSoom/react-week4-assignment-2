import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render Restaurants title', () => {
    const { getByText } = render(<App />);

    expect(getByText('Restaurants')).toBeInTheDocument();
  });
});
