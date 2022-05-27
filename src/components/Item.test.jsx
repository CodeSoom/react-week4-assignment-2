import { render } from '@testing-library/react';

import Item from './Item';

describe('Item', () => {
  const restaurant = {
    restaurantId: 1,
    restaurantName: '마녀식당',
    restaurantCategory: '양식',
    restaurantAddress: '서울시 강남구',
  };

  it('식당을 출력한다', () => {
    const { container } = render(<Item restaurant={restaurant} />);

    expect(container).toHaveTextContent('마녀식당');
    expect(container).toHaveTextContent('양식');
    expect(container).toHaveTextContent('서울시 강남구');
  });
});
