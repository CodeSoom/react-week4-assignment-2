import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const renderApp = () => render(<App />);

  context('renders', () => {
    it('H1 headings to Restaurants', () => {
      const title = 'Restaurants';

      const { container } = renderApp();

      expect(container).toHaveTextContent(title);
    });
  });
});
