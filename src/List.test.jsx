import React from 'react';
import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('with restaurants', () => {
    it('renders restaurants', () => {

      const { getByText } = render(<List restaurants={
        [
          {
            name: '마녀주방',
            category: '한식',
            address: '서울시 강남구',
          }
        ]
      }/>);

      expect(getByText(/마녀주방/)).not.toBeEmpty();
      expect(getByText(/한식/)).not.toBeEmpty();
      expect(getByText(/서울시 강남구/)).not.toBeEmpty();
    });
  });

  context('without restaurants', () => {
    it('renders empty', () => {
      const { container } = render(<List restaurants={[]}/>);

      expect(container.querySelector('ul').textContent).toBe('')
    });
  });
});