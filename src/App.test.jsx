import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  context('when layout', () => {
    it('has title text', () => {
      const { container } = render((
        <App />
      ));

      expect(container).toHaveTextContent(/Restaurant/);
    });
  });
});
