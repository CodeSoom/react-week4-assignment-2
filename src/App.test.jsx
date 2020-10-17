import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const { container, getByText, getByPlaceholderText } = render((
    <App />
  ));

  context('When first loaded', () => {
    it('show Restaurant title', () => {
      expect(container).toHaveTextContent('Restaurant');
    });

    it('show input that add Restaurant into list', () => {
      expect(getByPlaceholderText(/이름/)).not.toBeNull();
      expect(getByPlaceholderText(/분류/)).not.toBeNull();
      expect(getByPlaceholderText(/주소/)).not.toBeNull();
      expect(getByText(/등록/)).not.toBeNull();
    });

    it('show Restaurant list', () => {
      expect(getByText(/마녀주방 | 한식 | 서울시 강남구/)).not.toBeNull();
    });
  });
});
