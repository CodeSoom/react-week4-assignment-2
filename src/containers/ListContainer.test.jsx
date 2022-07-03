import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import given from 'given2';

import ListContainer from './ListContainer';

import RESTAURANTS from '../fixtures/restaurants';

jest.mock('react-redux');

describe('<ListContainer />', () => {
  given('restaurants', () => []);

  useSelector.mockImplementation((selector) => selector({
    restaurants: given.restaurants,
  }));

  const renderListContainer = () => render((<ListContainer />));

  context('레스토랑 목록이 있을 경우', () => {
    it('레스토랑 목록이 보인다.', () => {
      given('restaurants', () => RESTAURANTS);

      const { container } = renderListContainer();

      RESTAURANTS.forEach((restaurant) => {
        expect(container).toHaveTextContent(restaurant.name);
        expect(container).toHaveTextContent(restaurant.category);
        expect(container).toHaveTextContent(restaurant.address);
      });
    });
  });

  context('레스토랑 목록이 없을 경우', () => {
    it('"레스토랑을 추가해주세요!" 텍스트가 보인다.', () => {
      given('restaurants', () => []);

      const { getByText } = renderListContainer();

      expect(getByText('레스토랑을 추가해주세요!')).toBeInTheDocument();
    });
  });
});
