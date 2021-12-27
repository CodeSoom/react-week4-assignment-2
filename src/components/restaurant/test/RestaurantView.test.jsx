import { render } from '@testing-library/react';
import RestaurantView from '../RestaurantView';
import Restaurant from '../../../domain/Restaurant';

test('Restaurant 항목이 노출된다', () => {
  const expectName = 'New Name';
  const expectCategory = 'New Category';
  const expectAddress = 'New Address';
  const restaurant = Restaurant.newJson(expectName, expectCategory, expectAddress);

  const { container } = render((
    <RestaurantView
      restaurant={restaurant}
    />
  ));

  expect(container).toHaveTextContent(expectName);
  expect(container).toHaveTextContent(expectCategory);
  expect(container).toHaveTextContent(expectAddress);
});
