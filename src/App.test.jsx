import React from 'react';

import { useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import App from './App';

import restaurants from '../__fixture__/data';

jest.mock('react-redux');

function renderApp() {
  return render(<App />);
}

describe('<App />', () => {
  describe('Initial Rendering', () => {
    it('shows a app title', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [],
      }));

      const { container } = renderApp();

      expect(container).toHaveTextContent('Restaurants');
    });

    context('with restaurants', () => {
      it('shows restaurants', () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants,
        }));

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
        useSelector.mockImplementation((selector) => selector({
          restaurants: [],
        }));

        const { container } = renderApp();

        expect(container).not.toHaveTextContent(/레스토랑1/i);
        expect(container).not.toHaveTextContent(/분류1/i);
        expect(container).not.toHaveTextContent(/주소1/i);

        expect(container).not.toHaveTextContent(/레스토랑2/i);
        expect(container).not.toHaveTextContent(/분류2/i);
        expect(container).not.toHaveTextContent(/주소2/i);

        expect(container).not.toHaveTextContent(/레스토랑3/i);
        expect(container).not.toHaveTextContent(/분류3/i);
        expect(container).not.toHaveTextContent(/주소3/i);
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
      it('shows a new restaurant in inputs', () => {
        const { getByPlaceholderText } = renderApp();

        fireEvent.change(getByPlaceholderText(/이름/i), {
          target: {
            value: '이름1',
          },
        });

        expect(getByPlaceholderText(/이름/i).value).toBe('이름1');

        fireEvent.change(getByPlaceholderText(/분류/i), {
          target: {
            value: '분류1',
          },
        });

        expect(getByPlaceholderText(/분류/i).value).toBe('분류1');

        fireEvent.change(getByPlaceholderText(/주소/i), {
          target: {
            value: '주소1',
          },
        });

        expect(getByPlaceholderText(/주소/i).value).toBe('주소1');
      });
    });

    context('when the user add a new restaurant', () => {
      it('input is empty', () => {});

      it('shows a new restaurant into restaurants', () => {});
    });
  });
});
