import { render, fireEvent } from '@testing-library/react';

import RestaurantsForm from './RestaurantsForm';

test('RestaurantsForm', () => {
  const handleClick = jest.fn();
  const handleChange = jest.fn();

  const { getByDisplayValue, getByText } = render(
    <RestaurantsForm
      restaurant={{
        name: '마녀',
        category: '한식',
        location: '서울시',
      }}
      onChange={handleChange}
      onClick={handleClick}
    />,
  );

  expect(getByDisplayValue('마녀')).not.toBeNull();
  expect(getByDisplayValue('한식')).not.toBeNull();
  expect(getByDisplayValue('서울시')).not.toBeNull();

  fireEvent.change(getByDisplayValue('마녀'), {
    target: { value: '마녀주방' },
  });

  expect(handleChange).toBeCalled();

  expect(getByDisplayValue('마녀주방')).not.toBeNull();

  fireEvent.click(getByText('등록'));

  expect(handleClick).toBeCalled();
});
