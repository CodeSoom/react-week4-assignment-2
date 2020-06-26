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
        const restarunts = [
          {
            id: 1,
            name: '레스토랑1',
            type: '분류1',
            address: '주소1',
          },
          {
            id: 2,
            name: '레스토랑2',
            type: '분류2',
            address: '주소2',
          },
          {
            id: 3,
            name: '레스토랑3',
            type: '분류3',
            address: '주소3',
          },
        ];

        const { getByText } = renderApp();

        expect(getByText(/레스토랑1/i)).toBeInTheDocument();
        expect(getByText(/분류1/i)).toBeInTheDocument();
        expect(getByText(/주소1/i)).toBeInTheDocument();

        expect(getByText(/레스토랑2/i)).toBeInTheDocument();
        expect(getByText(/분류2/i)).toBeInTheDocument();
        expect(getByText(/주소2/i)).toBeInTheDocument();

        expect(getByText(/레스토랑3/i)).toBeInTheDocument();
        expect(getByText(/분류3/i)).toBeInTheDocument();
        expect(getByText(/주소3/i)).toBeInTheDocument();
      });
    });

    context('without restaurants', () => {
      it('shows nothing', () => {
        const restarunts = [];
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
