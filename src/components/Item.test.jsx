import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  it('레스토랑 목록이 보여집니다', () => {
    const restaurants = {
      id: 1, name: '마녀주방', category: '한식', address: '잠실',
    };

    const { container } = render((
      <Item
        restaurants={restaurants}
      />
    ));

    expect(container).toHaveTextContent('마녀주방');
    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('잠실');
  });
});
