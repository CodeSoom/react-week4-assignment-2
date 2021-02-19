import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

/**
 * input이 렌더링 되는지?
 */

describe('App', () => {
  context('without input value', () => {
    it('renders input placeholder', () => {
      const { getByPlaceholderText } = render(<App />);

      expect(getByPlaceholderText('이름')).not.toBeNull();
      expect(getByPlaceholderText('분류')).not.toBeNull();
      expect(getByPlaceholderText('주소')).not.toBeNull();
    });
  });
});
