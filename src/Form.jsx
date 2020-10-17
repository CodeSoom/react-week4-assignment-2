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
        placeholder="이름"
        value={name}
        onChange={handleChangeRestaurantName}
      />
      <Input
        placeholder="분류"
        value={type}
        onChange={handleChangeRestaurantType}
      />
      <Input
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
