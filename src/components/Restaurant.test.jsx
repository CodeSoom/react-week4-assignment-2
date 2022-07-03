import { render } from '@testing-library/react';

import Restaurant from './Restaurant';

import RESTAURANTS from '../fixtures/restaurants';

describe('<Restaurant />', () => {
  const { name, address, category } = RESTAURANTS[0];

  const renderRestaurant = () => render((
    <Restaurant
      name={name}
      category={category}
      address={address}
    />
  ));

  it('레스토랑 정보가 보인다.', () => {
    const { container } = renderRestaurant();

    expect(container).toHaveTextContent(name);
    expect(container).toHaveTextContent(category);
    expect(container).toHaveTextContent(address);
  });
});
