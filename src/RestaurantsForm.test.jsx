import { render, fireEvent } from '@testing-library/react';

import RestaurantsForm from './RestaurantsForm';

test('RestaurantsForm', () => {
  const handleClick = jest.fn();

  const { getByText } = render(
    <RestaurantsForm
      onClick={handleClick}
    />,
  );

  fireEvent.click(getByText('등록'));

  expect(handleClick).toBeCalled();
});
