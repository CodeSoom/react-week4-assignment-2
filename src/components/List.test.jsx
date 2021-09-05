import { render } from '@testing-library/react';

import mockRestaurants from '../../__mocks__/restaurants';
import List from './List';

describe('List', () => {
  const renderList = (restaurants) => render(<List restaurants={restaurants} />);

  context('레스토랑들이 있다면', () => {
    it('레스토랑들을 보여준다.', () => {
      const { getByText } = renderList(mockRestaurants);

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
