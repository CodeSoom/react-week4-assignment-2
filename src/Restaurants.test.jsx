import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import restaurants from '../fixture/restaurants';

jest.mock('react-redux');

test('Restaurants', () => {
  useSelector.mockImplemetation((selector) =>
    selector({
      restaurants,
    })
  );
  const { getbyText } = render(<Restaurants restaurants={restaurants} />);
});

expect(getbyText(/김밥제국/)).not.toBeNull;
