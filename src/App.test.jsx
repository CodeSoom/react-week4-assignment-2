import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

function renderApp() {
  render(<App />);
  return {
    heading: screen.getByText(/Restaurants/),
    nameInput: screen.getByPlaceholderText(/이름/),
    categoryInput: screen.getByPlaceholderText(/분류/),
    addressInput: screen.getByPlaceholderText(/주소/),
    registerButton: screen.getByRole('button', { name: /등록/ }),
  };
}

describe('<App />', () => {
  context('when initialized', () => {
    it('renders title', () => {
      // when
      const { heading } = renderApp();
      // then
      expect(heading).toBeInTheDocument();
    });

    it('renders input boxes', () => {
      // when
      const { nameInput, categoryInput, addressInput } = renderApp();
      // then
      expect(nameInput).toBeInTheDocument();
      expect(categoryInput).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
    });

    it('renders register button', () => {
      // when
      const { registerButton } = renderApp();
      // then
      expect(registerButton).toBeInTheDocument();
    });
  });
});
