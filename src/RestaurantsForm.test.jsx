import { render, fireEvent } from '@testing-library/react';

import RestaurantsForm from './RestaurantsForm';

test('RestaurantsForm', () => {
  const handleClick = jest.fn();

  const { getByDisplayValue, getByText } = render(
    <RestaurantsForm
      restaurant={{
        name: '마녀',
        category: '한식',
        location: '서울시',
      }}
      onClick={handleClick}
    />,
  );

  expect(getByDisplayValue('마녀')).not.toBeNull();
  expect(getByDisplayValue('한식')).not.toBeNull();
  expect(getByDisplayValue('서울시')).not.toBeNull();

  fireEvent.click(getByText('등록'));

  expect(handleClick).toBeCalled();
});
