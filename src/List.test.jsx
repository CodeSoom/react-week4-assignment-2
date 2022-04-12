import { render } from '@testing-library/react';
import List from './List';

const renderList = ({ restaurantList }) => render((
  <List restaurantList={restaurantList} />
));

describe('List', () => {
  context('without restaurant list', () => {
    it('renders blank', () => {
      const { container } = renderList({});

      expect(container.textContent).toBe('');
    });
  });

  context('with restaurnt list', () => {
    const restaurantList = [{
      name: '마녀주방',
      category: '한식',
      address: '서울시 강남구',
    }];

    it('renders restaurant', () => {
      const { container } = renderList({ restaurantList });

      expect(container).toHaveTextContent('마녀주방 | 한식 | 서울시 강남구');
    });
  });
});
