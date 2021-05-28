import { render } from '@testing-library/react';

import Restaurant from '../presentational/Restaurant';

test('<Restaurant />', () => {
  const restaurant = {
    id: 2,
    name: '시카고피자',
    category: '양식',
    address: '이태원동',
  };

  const { getByText } = render(
    <Restaurant restaurant={restaurant} />,
  );

  expect(getByText(`${restaurant.name} | ${restaurant.category} | ${restaurant.address}`)).toBeInTheDocument();
});
