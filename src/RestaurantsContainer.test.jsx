import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants } from '../fixture/restautrants';

// 해당 테스트를 처리해야하는지? 고민...
// 만약 한다면 어떻게 처리하는거지?
describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
    restautrant: {
      name: '',
      type: '',
      address: '',
    },
  }));

  it('레스토랑 리스트의 상태를 가져올 수 있다.', () => {
    const { container } = render(<RestaurantsContainer />);

    // 이 부분은 UI 랑 같은데..
    // 상태를 제대로 가져왔는데 테스트 해야하는게 아닌가?
    restaurants.forEach((restaurant) => {
      expect(container).toHaveTextContent(restaurant.name);
      expect(container).toHaveTextContent(restaurant.type);
      expect(container).toHaveTextContent(restaurant.address);
    });
  });
});
