import { render } from '@testing-library/react';
import List from './List';

describe('List', () => {
  const renderList = (restaurants) => render(<List restaurants={restaurants} />);

  context('식당 정보가 없으면', () => {
    it('화면에 아무 것도 렌더링 하지 않는다.', () => {
      const { container } = renderList([]);

      expect(container).toHaveTextContent('');
    });
  });

  context('식당 정보가 있으면', () => {
    it('식당 정보를 화면에 렌더링 한다.', () => {
      const restaurants = [
        {
          name: '시카고피자',
          category: '양식',
          address: '이태원동',
        },
      ];

      const { getByText } = renderList(restaurants);

      expect(getByText(/시카고피자/)).not.toBeNull();
      expect(getByText(/양식/)).not.toBeNull();
      expect(getByText(/이태원동/)).not.toBeNull();
    });
  });
});
