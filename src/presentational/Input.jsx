import React from 'react';

export default function Input({
  name, category, address, onChange,
  onClickAddRestaurant,
}) {
  function handleChange(event) {
    const { name: inputName, value } = event.target;

    return onChange({
      name: inputName,
      value,
    });
  }

  return (
    <>
      <input
        type="text"
        placeholder="이름"
        name="name"
        onChange={handleChange}
        value={name}
      />
      <input
        type="text"
        placeholder="분류"
        name="category"
        onChange={handleChange}
        value={category}
      />
      <input
        type="text"
        placeholder="주소"
        name="address"
        onChange={handleChange}
        value={address}
      />
      <button type="button" onClick={onClickAddRestaurant}>등록</button>
    </>
  );
}
