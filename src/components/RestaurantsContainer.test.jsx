import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import { restaurants as restaurantsMock } from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants: restaurantsMock,
  }));

  it('레스토랑 리스트를 화면에 렌더한다.', () => {
    render(<RestaurantsContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('레스토랑 리스트는 초기에 3개를 갖는다.', () => {
    const { restaurants } = useSelector((state) => ({
      restaurants: state.restaurants,
    }));

    expect(restaurants).toHaveLength(3);
  });
});
