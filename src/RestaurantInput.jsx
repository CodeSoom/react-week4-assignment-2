import React from 'react';

export default function RestaurantInput({
  name, type, address,
  onChangeName, onChangeType, onChangeAddress, onClickAddRestaurant,
}) {
  return (
    <div>
      <input
        value={name}
        placeholder="이름"
        onChange={(event) => onChangeName(event.target.value)}
      />
      <input
        value={type}
        placeholder="분류"
        onChange={(event) => onChangeType(event.target.value)}
      />
      <input
        value={address}
        placeholder="주소"
        onChange={(event) => onChangeAddress(event.target.value)}
      />
      <button
        type="button"
        onClick={onClickAddRestaurant}
      >
        등록
      </button>
    </div>
  );
}
