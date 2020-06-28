import React from 'react';

export default function Input({
  title, kind, address, onChange, onClickAddRestaurant,
}) {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        value={title}
        name="title"
        placeholder="이름"
      />
      <input
        type="text"
        onChange={onChange}
        value={kind}
        name="kind"
        placeholder="분류"
      />
      <input
        type="text"
        onChange={onChange}
        value={address}
        name="address"
        placeholder="주소"
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
