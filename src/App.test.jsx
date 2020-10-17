import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: [
      { name: '마녀주방', category: '한식', location: '서울사 강남구' },
    ],
  }));

  function renderApp() {
    return render((<App />));
  }

  describe('first loaded', () => {
    it('show Restaurant title', () => {
      const { container } = renderApp();
      expect(container).toHaveTextContent('Restaurant');
    });

    it('show input that add Restaurant into list', () => {
      const { getByPlaceholderText, getByText } = renderApp();

      expect(getByPlaceholderText(/이름/)).not.toBeNull();
      expect(getByPlaceholderText(/분류/)).not.toBeNull();
      expect(getByPlaceholderText(/주소/)).not.toBeNull();
      expect(getByText(/등록/)).not.toBeNull();
    });

    it('show Restaurant list', () => {
      const { getByText } = renderApp();
      expect(getByText(/마녀주방 | 한식 | 서울시 강남구/)).not.toBeNull();
    });
  });
});
