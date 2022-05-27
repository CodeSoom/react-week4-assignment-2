import React from 'react';

export default function Input({
  nameValue,
  categoryValue,
  addressValue,
  onChangeRestaurantName,
  onChangeRestaurantCategory,
  onChangeRestaurantAddress,
  onClickAddRestaurant,
}) {
  return (
    <p>
      <input
        type="text"
        name="name"
        placeholder="이름"
        value={nameValue}
        onChange={onChangeRestaurantName}
      />
      <input
        type="text"
        name="category"
        placeholder="분류"
        value={categoryValue}
        onChange={onChangeRestaurantCategory}
      />
      <input
        type="text"
        name="address"
        placeholder="주소"
        value={addressValue}
        onChange={onChangeRestaurantAddress}
      />
      <button type="button" onClick={onClickAddRestaurant}>
        등록
      </button>
    </p>
  );
}
