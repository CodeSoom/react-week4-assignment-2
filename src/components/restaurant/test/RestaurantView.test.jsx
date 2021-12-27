import { render } from '@testing-library/react';
import RestaurantView from '../RestaurantView';
import Restaurant from '../../../domain/Restaurant';

test('Restaurant 항목이 노출된다', () => {
  const restaurant = Restaurant.newJson('New Name', 'New Category', 'New Address');

  const { container } = render((
    <RestaurantView
      restaurant={restaurant}
    />
  ));

  expect(container).toHaveTextContent('New Name | New Category | New Address');
});
