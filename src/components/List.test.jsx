import { render } from '@testing-library/react';
import List from './List';

describe('List', () => {
  const renderList = (restaurants) => render(<List restaurants={restaurants} />);

  context('레스토랑들이 있다면', () => {
    it('레스토랑들을 보여준다.', () => {
      const restaurants = [
        {
          id: 1, name: '마녀주방', category: '한식', address: '서울시 강남구',
        },
        {
          id: 2, name: '시카고피자', category: '양식', address: '이태원동',
        },
      ];
      const { getByText } = renderList(restaurants);

      expect(getByText('마녀주방 | 한식 | 서울시 강남구')).not.toBeUndefined();
      expect(getByText('시카고피자 | 양식 | 이태원동')).not.toBeUndefined();
    });
  });

  context('레스토랑들이 없다면', () => {
    it('"레스토랑이 없습니다"를 출력한다.', () => {
      const { getByText } = renderList([]);

      expect(getByText(/레스토랑이 없습니다/)).not.toBeUndefined();
    });
  });
});
