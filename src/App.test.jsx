import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const useSelector = jest.fn();

  context('with registers', () => {
    it('shows all registers', () => {
      useSelector.mockImplementation((selector) => selector({
        registers: [{
          id: 1,
          information: '마녀식당 | 한식 | 서울시 강남구',
        }],
      }));

      const { queryByText } = render((<App />));

      expect(queryByText(/마녀식당 | 한식 | 서울시 강남구/)).not.toBeNull();
      expect(queryByText(/등록/)).not.toBeNull();
    });
  });

  context('with no registers', () => {
    it('nothing shows', () => {
      useSelector.mockImplementation((selector) => selector({ registers: [] }));

      const { queryByText } = render((<App />));

      expect(queryByText(/마녀식당 | 한식 | 서울시 강남구/)).toBeNull();
      expect(queryByText(/등록/)).not.toBeNull();
    });
  });
});
