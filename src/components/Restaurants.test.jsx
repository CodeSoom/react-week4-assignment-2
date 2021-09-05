import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

import restaurants from '../../fixtures/restaurants';
import { useSelector } from '../../__mocks__/react-redux';

jest.mock('react-redux');

test('Restaurants', () => {
    useSelector.mockImplementation((selector) => selector({
        restaurants,
    }));

  const { getByText } = render((
    <Restaurants restaurants={restaurants} />
  ));
});
