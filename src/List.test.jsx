import { render } from '@testing-library/react';

import restaurantLists from '../fixtures/restaurantLists';

import List from './List';

describe('List', () => {
  function renderList(restaurants) {
    return render((<List restaurantLists={restaurants} />));
  }

  context('레스토랑 목록이 있을 경우', () => {
    it('레스토랑 목록이 렌더링된다.', () => {
      const { container } = renderList(restaurantLists);

      expect(container).toHaveTextContent(/양키통닭/);
      expect(container).toHaveTextContent(/한식/);
      expect(container).toHaveTextContent(/서울시 문래동/);
    });
  });

  context('레스토랑 목록이 없을 경우', () => {
    it('아무 것도 렌더링 되지 않는다.', () => {
      const { container } = renderList([]);

      expect(container).toHaveTextContent('');
    });
  });
});
