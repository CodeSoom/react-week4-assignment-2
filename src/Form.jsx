import React from 'react';

import Input from './Input';

export default function Form({
  restaurantInfo,
  handleClickAdd,
  handleChangeRestaurantName,
  handleChangeRestaurantType,
  handleChangeRestaurantLocation,
}) {
  const { name, type, location } = restaurantInfo;

  return (
    <>
      <Input
        name="name"
        placeholder="이름"
        value={name}
        onChange={handleChangeRestaurantName}
      />
      <Input
        name="category"
        placeholder="분류"
        value={type}
        onChange={handleChangeRestaurantType}
      />
      <Input
        name="address"
        placeholder="주소"
        value={location}
        onChange={handleChangeRestaurantLocation}
      />
      <button
        type="submit"
        onClick={handleClickAdd}
      >
        등록
      </button>
    </>
  );
}
