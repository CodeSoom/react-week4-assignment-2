import { render } from '@testing-library/react';

import RestaurantForm from './RestaurantForm';

import restaurants from '../fixtures/restaurants';

const handleClick = jest.fn();

describe('RestaurantForm', () => {
  it('renders 등록 button', () => {
    const { queryByText } = render((
      <RestaurantForm
        onClick={handleClick}
      />
    ));

    expect(queryByText(/등록/)).not.toBeNull();
  });
});
