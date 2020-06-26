import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  context('when start application', () => {
    it('Restaurants가 보인다.', () => {
      const { container } = render(
        <App />,
      );

      expect(container).toHaveTextContent('Restaurants');
    });
  });
});
