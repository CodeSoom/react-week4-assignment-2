import React from 'react';

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
      <input
        name="name"
        placeholder="이름"
        value={name}
        onChange={handleChangeRestaurantName}
      />
      <input
        name="category"
        placeholder="분류"
        value={type}
        onChange={handleChangeRestaurantType}
      />
      <input
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
