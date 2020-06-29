import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantListContainer from './RestaurantListContainer';

import { restaurants } from '../__fixtures__/restaurants';

jest.mock('react-redux');

describe('RestaurantListContainer', () => {
  context('레스토랑 정보가 없다면', () => {
    it('화면에 아무것도 나타나지 않는다.', () => {
      const emptyRestaurants = [];

      useSelector.mockImplementation((selector) => selector({
        restaurants: emptyRestaurants,
      }));

      const { container } = render((
        <RestaurantListContainer
          restaurants={restaurants}
        />
      ));

      expect(container).toHaveTextContent('');
    });
  });

  context('레스토랑 정보가 있다면', () => {
    it('화면에 레스토랑 정보를 보여준다.', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));

      const { container, getAllByText } = render((
        <RestaurantListContainer />
      ));

      expect(container).toHaveTextContent(/마녀주방/);
      expect(container).toHaveTextContent(/할머니뼈해장국/);
      expect(getAllByText(/한식/)[0]).toBeInTheDocument();
      expect(container).toHaveTextContent(/강서/);
      expect(container).toHaveTextContent(/강남/);
    });
  });
});
