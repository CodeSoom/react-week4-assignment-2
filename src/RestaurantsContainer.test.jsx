import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');

describe('<RestaurantsContainer />', () => {
  context('기존 식당 리스트가 있을 때', () => {
    it('리스트가 보인다', () => {
      const restaurants = [
        {
          id: 1,
          name: '바른 치킨',
          category: '치킨',
          address: '시립대로',
        },
      ];
      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));
      const { getByText } = render((
        <RestaurantsContainer />
      ));

      expect(getByText(/바른 치킨|치킨|시립대로 /)).not.toBeNull();
    });
  });

  context('기존 식당 리스트가 없을 때', () => {
    it('리스트가 없습니다. 보이기', () => {
      const restaurants = [];
      useSelector.mockImplementation((selector) => selector({
        restaurants,
      }));
      const { container } = render((
        <RestaurantsContainer />
      ));

      expect(container).toHaveTextContent('리스트가 없습니다.');
    });
  });
});
