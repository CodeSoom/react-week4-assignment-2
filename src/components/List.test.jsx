import { render } from '@testing-library/react';

import List from './List';

import restaurants from '../../fixtures/RestaurantsData';

describe('List', () => {
  const renderList = (restaurant) => render(<List restaurantCatalog={restaurant} />);

  context('등록된 식당이 있을 때,', () => {
    it('식당을 출력한다.', () => {
      const { container } = renderList(restaurants);

      expect(container).toHaveTextContent('마녀식당');
      expect(container).toHaveTextContent('양식');
      expect(container).toHaveTextContent('분당구 정자동');
    });
  });

  // TODO: '등록된 식당이 없어요' 기능 추가가 필요할 때, 테스트 코드를 작성한다.
  context('등록된 식당이 없을 때,', () => {});
});
