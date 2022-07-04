import { render } from '@testing-library/react';

import Form from './Form';

import { restaurantName, restaurantType, restaurantAdress } from './fixtures/restaurant';

describe('Form', () => {
  const handleChangeRestaurantName = jest.fn();
  const handleChangeRestaurantType = jest.fn();
  const handleChangeRestaurantAdress = jest.fn();
  const handleClick = jest.fn();

  const renderForm = () => render((
    <Form
      restaurantName={restaurantName}
      restaurantType={restaurantType}
      restaurantAdress={restaurantAdress}
      handleChangeRestaurantName={handleChangeRestaurantName}
      handleChangeRestaurantType={handleChangeRestaurantType}
      handleChangeRestaurantAdress={handleChangeRestaurantAdress}
      handleClickAddRestaurant={handleClick}
    />
  ));

  it('form-restaurantName을 렌더링한다', () => {
    const { getByPlaceholderText } = renderForm();

    expect(getByPlaceholderText('이름')).toHaveValue(restaurantName);
  });

  it('form-restaurantType을 렌더링한다', () => {
    const { getByPlaceholderText } = renderForm();

    expect(getByPlaceholderText('분류')).toHaveValue(restaurantType);
  });

  it('form-restaurantAdress을 렌더링한다', () => {
    const { getByPlaceholderText } = renderForm();

    expect(getByPlaceholderText('주소')).toHaveValue(restaurantAdress);
  });

  it('등록버튼을 렌더링한다', () => {
    const { getByText } = renderForm();

    expect(getByText(/등록/)).not.toBeNull();
  });
});
