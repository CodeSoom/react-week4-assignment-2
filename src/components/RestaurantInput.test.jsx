import { render } from '@testing-library/react';
import RestaurantList from './RestaurantList';

describe('RestaurantList', () => {
  it('restaurants를 전달하지 않으면 비어있는 리스트를 보여줍니다.', () => {
    const sut = render(<RestaurantList />);

    expect(sut.queryByRole('listitem')).toBeNull();
  });
});
