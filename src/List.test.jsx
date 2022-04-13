import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  function renderList(restaurants) {
    return render((
      <List restaurants={restaurants} />
    ));
  }

  context('with restaurants', () => {
    it('renders restaurants', () => {
      const restaurants = [
        {
          id: 1, name: '도미노피자', category: '양식', address: '강남구',
        },
        {
          id: 2, name: '홍콩반점', category: '중식', address: '강북구',
        },
      ];

      const { queryByText } = renderList(restaurants);

      expect(queryByText('도미노피자 | 양식 | 강남구')).not.toBeNull();
      expect(queryByText('홍콩반점 | 중식 | 강북구')).not.toBeNull();
    });
  });

  context('without restaurants', () => {
    it('renders nothing', () => {
      const restaurants = [];

      const { container } = renderList(restaurants);

      expect(container.innerHTML).toBe('');
    });
  });
});
