import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurants,
  }));

  it('renders restaurant', () => {
    const { queryByText } = render((
      <RestaurantsContainer />
    ));

    expect(queryByText(/김밥제국/)).not.toBeNull();
  });
});
