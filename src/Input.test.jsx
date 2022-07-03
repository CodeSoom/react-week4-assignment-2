import { render } from '@testing-library/react';

import Input from './Input';

import { restaurantName, restaurantType, restaurantAdress } from './fixtures/restaurant';

describe('Input', () => {
  const handleChangeRestaurantName = jest.fn();
  const handleChangeRestaurantType = jest.fn();
  const handleChangeRestaurantAdress = jest.fn();
  const handleClick = jest.fn();

  const renderInput = () => render((
    <Input
      nameInput={restaurantName}
      typeInput={restaurantType}
      adressInput={restaurantAdress}
      handleChangeRestaurantName={handleChangeRestaurantName}
      handleChangeRestaurantType={handleChangeRestaurantType}
      handleChangeRestaurantAdress={handleChangeRestaurantAdress}
      handleClickAddRestaurant={handleClick}
    />
  ));

  it('input-restaurantName을 렌더링한다', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText('이름')).toHaveValue(restaurantName);
  });

  it('input-restaurantType을 렌더링한다', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText('분류')).toHaveValue(restaurantType);
  });

  it('input-restaurantAdress을 렌더링한다', () => {
    const { getByPlaceholderText } = renderInput();

    expect(getByPlaceholderText('주소')).toHaveValue(restaurantAdress);
  });

  it('등록버튼을 렌더링한다', () => {
    const { getByText } = renderInput();

    expect(getByText(/등록/)).not.toBeNull();
  });
});
