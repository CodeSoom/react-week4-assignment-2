import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import List from './List';

jest.mock('react-redux');

function stubSelector(restaurants = []) {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));
}

describe('List', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  context('with restaurants list', () => {
    const state = {
      restaurants: [
        {
          id: 1,
          name: '마녀주방',
          classification: '한식',
          address: '서울시 강남구',
        },
      ],
    };

    it('renders restaurants list', () => {
      stubSelector({ restaurants: state.restaurants });

      const { getAllByRole } = render((
        <List />
      ));

      state.restaurants.forEach((restaurant, index) => {
        expect(getAllByRole('listitem')[index].textContent)
          .toBe(`${restaurant.name} | ${restaurant.classification} | ${restaurant.address}`);
      });
    });
  });
});
