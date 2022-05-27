import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

import restaurants from '../../fixtures/RestaurantsData';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ restaurantCatalog: restaurants }));

  const renderListContainer = () => render(<ListContainer />);

  context('restaurants가 있을 때', () => {
    it('식당들을 출력한다', () => {
      const { container } = renderListContainer();

      expect(container).toHaveTextContent('마녀식당');
      expect(container).toHaveTextContent('양식');
      expect(container).toHaveTextContent('분당구 정자동');
    });
  });

  // TODO: '등록된 식당이 없어요' 기능 추가가 필요할 때, 테스트 코드를 작성한다.
  context('restaurants가 없을 때', () => {});
});
