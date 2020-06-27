import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  context('when there are restaurants', () => {
    it('should display restaurants', () => {
      const { getByText } = render((
        <App />
      ));

      expect(getByText('Restaurants')).not.toBeNull();

      expect(getByText(/Seoul Iteawon/)).not.toBeNull();
    });
  });
});
