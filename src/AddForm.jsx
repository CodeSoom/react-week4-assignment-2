import React from 'react';

export default function AddForm({
  restaurantInformation,
  onChangeInput,
  onClickAddButton,
}) {
  const { name, category, address } = restaurantInformation;

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={name}
        name="name"
        onChange={onChangeInput}
      />
      <input
        type="text"
        placeholder="분류"
        value={category}
        name="category"
        onChange={onChangeInput}
      />
      <input
        type="text"
        placeholder="주소"
        value={address}
        name="address"
        onChange={onChangeInput}
      />
      <button type="submit" onClick={onClickAddButton}>등록</button>
    </div>
  );
}
