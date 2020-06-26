import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

function renderApp() {
  return render(<App />);
}

describe('<App />', () => {
  describe('Initial Rendering', () => {
    it('shows a app title', () => {
      const { container } = renderApp();

      expect(container).toHaveTextContent('Restaurants');
    });

    context('with restaurants', () => {
      it('shows restaurants', () => {

      });
    });

    context('without restaurants', () => {
      it('shows nothing', () => {

      });
    });

    it('shows 3 inputs', () => {
      const { getByPlaceholderText } = renderApp();

      expect(getByPlaceholderText(/이름/i)).toBeInTheDocument();
      expect(getByPlaceholderText(/분류/i)).toBeInTheDocument();
      expect(getByPlaceholderText(/주소/i)).toBeInTheDocument();
    });

    it('shows a button for adding a restaurant ', () => {
      const { getByRole } = renderApp();

      expect(getByRole('button')).toHaveTextContent(/등록/i);
    });
  });

  describe('User Interaction', () => {
    context('when the user input a new restaurant', () => {
      it('shows a new restaurant in inputs', () => {});
    });

    context('when the user add a new restaurant', () => {
      it('input is empty', () => {});

      it('shows a new restaurant into restaurants', () => {});
    });
  });
});
