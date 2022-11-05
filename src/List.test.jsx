import { render } from '@testing-library/react';

import restaurantList from '../fixtures/restaurantList';

import List from './List';

describe('List', () => {
  function renderList(restaurants) {
    return render((<List restaurantList={restaurants} />));
  }

  context('레스토랑 목록이 있을 경우', () => {
    it('레스토랑 목록이 렌더링된다.', () => {
      const { container } = renderList(restaurantList);

      expect(container).toHaveTextContent('양키통닭');
    });
  });

  context('레스토랑 목록이 없을 경우', () => {
    it('아무 것도 렌더링 되지 않는다.', () => {
      const { container } = renderList([]);

      expect(container).toHaveTextContent('');
    });
  });
});
