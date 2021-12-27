import { render } from '@testing-library/react';
import RestaurantsView from '../RestaurantsView';
import Restaurant from '../../../domain/Restaurant';

describe('RestaurantsView', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  function renderTestComponent(restaurants) {
    return render((
      <RestaurantsView
        restaurants={restaurants}
      />
    ));
  }

  it('restaurant 수만큼 노출된다 ', () => {
    const restaurants = [
      Restaurant.newJson('New Name', 'New Category', 'New Address'),
    ];

    const { getByText, getAllByRole } = renderTestComponent(restaurants);

    const result = getAllByRole('listitem');
    expect(result).toHaveLength(1);
    expect(getByText(/New Name/)).toBeDefined();
    expect(getByText(/New Category/)).toBeDefined();
    expect(getByText(/New Address/)).toBeDefined();
  });
});
