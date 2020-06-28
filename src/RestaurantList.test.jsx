import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

import restaurants from '../__fixture__/data';

jest.mock('react-redux');

function renderRestaurantList() {
  return render(<RestaurantList />);
}

describe('<RestaurantList />', () => {
  describe('Initial Rendering', () => {
    context('with restaurants', () => {
      it('shows restaurants', () => {
        useSelector.mockImplementation((selector) => selector({
          restaurants,
          restaurant: {},
        }));

        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        const { getByText } = renderRestaurantList();

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
        const dispatch = jest.fn();
        useDispatch.mockImplementation(() => dispatch);

        useSelector.mockImplementation((selector) => selector({
          restaurants: [],
          restaurant: {},
        }));

        const { container } = renderRestaurantList();

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
  });
});
