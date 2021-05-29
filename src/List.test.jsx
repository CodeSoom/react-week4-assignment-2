import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  function renderList(restaurants) {
    return render(<List restaurants={restaurants} />);
  }

  context('with restaurants', () => {
    const restaurants = [
      {
        id: 1,
        name: '마녀주방',
        category: '한식',
        address: '서울시 강남구',
      },

    ];

    it('renders restaurants', () => {
      const { getByText } = renderList(restaurants);

      expect(getByText(/마녀주방/)).not.toBeNull();
      expect(getByText(/한식/)).not.toBeNull();
      expect(getByText(/서울시 강남구/)).not.toBeNull();
    });
  });
});
