import { render } from '@testing-library/react';

import RestaurantInput from './RestaurantInput';

test('RestaurantInput', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const { getByDisplayValue } = render((
    <RestaurantInput
      valueName="마녀주방"
      valueCategory="한식"
      valueAddress="서울시 강남구"
      onChangeName={handleChange}
      onChangeCategory={handleChange}
      onChangeAddress={handleChange}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue('이름')).not.toBeNull();
  expect(getByDisplayValue('분류')).not.toBeNull();
  expect(getByDisplayValue('주소')).not.toBeNull();
});
