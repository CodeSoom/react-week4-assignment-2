import React from 'react';

export default function Input({ title, onChangeTitle, onClickAddRestaurant }) {
  return (
    <div>
      <input
        type="text"
        onChange={onChangeTitle}
        value={title}
        placeholder="이름"
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
