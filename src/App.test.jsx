import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  context('when initialized', () => {
    it('renders title', () => {
      // when
      render(<App />);
      const heading = screen.getByText(/Restaurants/);
      // then
      expect(heading).toBeInTheDocument();
    });

    it('renders input boxes', () => {
      // when
      render(<App />);
      const nameInput = screen.getByPlaceholderText(/이름/);
      const categoryInput = screen.getByPlaceholderText(/분류/);
      const addressInput = screen.getByPlaceholderText(/주소/);
      // then
      expect(nameInput).toBeInTheDocument();
      expect(categoryInput).toBeInTheDocument();
      expect(addressInput).toBeInTheDocument();
    });

    it('renders register button', () => {
      // when
      render(<App />);
      const registerButton = screen.getByRole('button', { name: /등록/ });
      // then
      expect(registerButton).toBeInTheDocument();
    });
  });
});
