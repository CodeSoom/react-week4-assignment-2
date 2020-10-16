import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  context('When first loaded', () => {
    it('show Restaurant title', () => {
      const { container } = render((
        <App />
      ));

      expect(container).toHaveTextContent('Restaurant');
    });

    it('show input that add Restaurant into list', () => {

    });

    it('show Restaurant list', () => {

    });
  });
});
