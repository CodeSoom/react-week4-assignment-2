import { render } from '@testing-library/react';

import RestaurantList from './RestaurantList';
import restaurants from '../fixtures/restaurants';

describe('RestaurantList', () => {
  context('without restaurants', () => {
    it("doesn't exist", () => {
      const { getByRole } = render(<RestaurantList restaurants={[]} />);
      expect(getByRole('list').children).toHaveLength(0);
    });
  });
  context('with restaurants', () => {
    it('renders a list of restaurants', () => {
      const { getByText, getByRole } = render(<RestaurantList restaurants={restaurants} />);

      expect(getByText(/마녀주방 | 한식 | 서울시 강남구/i)).not.toBeNull();
      expect(getByText(/시카고피자 | 양식 | 이태원동/i)).not.toBeNull();
      expect(getByText(/키와미 | 일식 | 분당구 정자동/i)).not.toBeNull();

      expect(getByRole('list').children).toHaveLength(3);
    });
  });
});
