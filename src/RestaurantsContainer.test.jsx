import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

// 해당 테스트를 처리해야하는지? 고민...
// 만약 한다면 어떻게 처리하는거지?
describe('RestaurantsContainer', () => {
  it('레스토랑 리스트의 상태를 가져올 수 있다.', () => {
    render(<RestaurantsContainer />);
  });
});
