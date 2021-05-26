import React from 'react';

export default function RestaurantInput({
  onChangeName, onChangeType, onChangeAddress, onClickAddRestaurant,
}) {
  return (
    <div>
      <input
        placeholder="이름"
        onChange={(event) => onChangeName(event.target.value)}
      />
      <input
        placeholder="분류"
        onChange={(event) => onChangeType(event.target.value)}
      />
      <input
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
