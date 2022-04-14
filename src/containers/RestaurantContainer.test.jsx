import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRestaurantContainer() {
    return render(<RestaurantContainer />);
  }

  function returnUseSelector({ restaurants }) {
    return useSelector.mockImplementation((selector) => selector({
      restaurants,
    }));
  }

  returnUseSelector({
    restaurants: [{
      id: 1,
      name: '두향',
      category: '한식',
      address: '성남시 분당구',
    }],
  });

  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { queryByText } = renderRestaurantContainer();

      expect(queryByText(/두향 | 한식 | 성남시 분당구/)).not.toBeNull();
    });
  });

  context('without restaurants', () => {
    it('renders "식당이 없어요!"', () => {
      returnUseSelector([]);

      const { container } = renderRestaurantContainer();
      expect(container).toHaveTextContent(/식당이 없어요!/);
    });
  });
});
