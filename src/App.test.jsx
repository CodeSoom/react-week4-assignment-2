import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const useSelector = jest.fn();
  useSelector.mockImplementation((selector) => selector({
    registers: [{
      id: 1,
      information: '마녀식당 | 한식 | 서울시 강남구',
    }],
  }));

  const { queryByText } = render((<App />));

  expect(queryByText(/마녀식당 | 한식 | 서울시 강남구/)).not.toBeNull();
});
