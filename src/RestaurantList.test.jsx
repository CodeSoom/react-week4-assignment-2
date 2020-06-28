import React from 'react';

import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';

import restaurants from '../__fixture__/data';

describe('<RestaurantList />', () => {
  describe('Initial Rendering', () => {
    context('with restaurants', () => {
      it('shows restaurants', () => {
        const { queryByText } = render(<RestaurantList
          restaurants={restaurants}
        />);

        expect(queryByText(/레스토랑1/i)).toBeInTheDocument();
        expect(queryByText(/분류1/i)).toBeInTheDocument();
        expect(queryByText(/주소1/i)).toBeInTheDocument();

        expect(queryByText(/레스토랑2/i)).toBeInTheDocument();
        expect(queryByText(/분류2/i)).toBeInTheDocument();
        expect(queryByText(/주소2/i)).toBeInTheDocument();

        expect(queryByText(/레스토랑3/i)).toBeInTheDocument();
        expect(queryByText(/분류3/i)).toBeInTheDocument();
        expect(queryByText(/주소3/i)).toBeInTheDocument();
      });
    });

    context('without restaurants', () => {
      it('shows nothing', () => {
        const { container } = render(<RestaurantList
          restaurants={[]}
        />);

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
