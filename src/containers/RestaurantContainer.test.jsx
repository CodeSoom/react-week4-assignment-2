import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

// import {
//   addRestaurant, updateAddress, updateCategory, updateName,
// } from '../redux/actions';

import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');

describe('RestaurantContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    name: '',
    category: '',
    address: '',
    restaurents: [{
      id: 1,
      name: '두향',
      category: '한식',
      address: '성남시 분당구',
    }],
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderRestaurantContainer() {
    return render(<RestaurantContainer />);
  }

  context('with restaurants', () => {
    it('renders restaurants', () => {
      const { queryByText } = renderRestaurantContainer();

      expect(queryByText('두향 | 한식 | 성남시 분당구')).not.toBeNull();
    });
  });
});
