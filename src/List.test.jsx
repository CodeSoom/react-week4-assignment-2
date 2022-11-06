import { render } from '@testing-library/react';
import List from './List';

import restaurantList from '../fixtures/restaurantList';

describe('List', () => {
  const renderList = (restaurants) => render((
    <List
      restaurantList={restaurants}
    />));

  context('레스토랑 목록이 있을 때', () => {
    it('입력한 레스토랑이 랜더링된다', () => {
      const { container } = renderList(restaurantList);

      expect(container).not.toBeNull();
      expect(container).toHaveTextContent('김밥지옥');
    });
  });

  context('레스토랑 목록이 없을 때', () => {
    it('목록이 없어요! 메세지가 뜬다', () => {
      const restaurants = [];
      const { container } = renderList(restaurants);

      expect(container).toHaveTextContent('목록이 없어요!');
    });
  });
});
