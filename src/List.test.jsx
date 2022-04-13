import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('without restaurant', () => {
    it('renders "레스토랑 목록이 없습니다."', () => {
      const restaurantList = [];

      const { container } = render((
        <List
          restaurantList={restaurantList}
        />
      ));

      expect(container).toHaveTextContent('레스토랑 목록이 없습니다.');
    });
  });

  it('renders restaurant list', () => {
    const restaurantList = [
      {
        id: 1, name: '시카고피자', category: '양식', address: '이태원구',
      },
      {
        id: 2, name: '마녀식당', category: '한식', address: '서울시 강남구',
      },
    ];

    const { container } = render((
      <List
        restaurantList={restaurantList}
      />
    ));

    expect(container).toHaveTextContent('시카고피자 | 양식 | 이태원구');
    expect(container).toHaveTextContent('마녀식당 | 한식 | 서울시 강남구');
  });
});
