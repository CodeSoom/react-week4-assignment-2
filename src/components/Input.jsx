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
  const handleSubmit = (event) => {
    event.preventDefault();

    onClickAddRestaurant();
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">등록</button>
    </form>
  );
}
