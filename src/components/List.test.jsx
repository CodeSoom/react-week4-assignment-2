import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  function renderList(restaurants) {
    return render((
      <List
        restaurants={restaurants}
      />
    ));
  }

  context('restaurants가 있을 때', () => {
    const restaurants = [
      {
        id: 1, name: '마녀주방', category: '한식', address: '잠실',
      },
      {
        id: 2, name: '김가네', category: '한식', address: '창신',
      },
    ];

    it('restaurants의 내용이 보여집니다', () => {
      const { getByText } = renderList(restaurants);

      expect(getByText(/'마녀주방'/)).not.toBeNull();
      expect(getByText(/'김가네'/)).not.toBeNull();
    });
  });
});
