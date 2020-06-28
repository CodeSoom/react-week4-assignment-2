import React from 'react';

export default function Input({
  title, onChangeTitle, onClickAddRestaurant,
  kind, onChangeKind,
}) {
  return (
    <div>
      <input
        type="text"
        onChange={onChangeTitle}
        value={title}
        placeholder="이름"
      />
      <input
        type="text"
        onChange={onChangeKind}
        value={kind}
        placeholder="분류"
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
