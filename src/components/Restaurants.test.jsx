import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import RESTAURANTS from '../fixtures/restaurants';

describe('<Restaurants />', () => {
  const renderRestaurants = (restaurants) => render((<Restaurants restaurants={restaurants} />));

  context('레스토랑 목록이 있을 경우', () => {
    it('레스토랑 목록이 보인다.', () => {
      const { container } = renderRestaurants(RESTAURANTS);

      RESTAURANTS.forEach((restaurant) => {
        expect(container).toHaveTextContent(restaurant.name);
        expect(container).toHaveTextContent(restaurant.category);
        expect(container).toHaveTextContent(restaurant.address);
      });
    });
  });

  context('레스토랑 목록이 없을 경우', () => {
    it('"레스토랑을 추가해주세요!" 텍스트가 보인다.', () => {
      const { getByText } = renderRestaurants([]);

      expect(getByText('레스토랑을 추가해주세요!')).toBeInTheDocument();
    });
  });
});
