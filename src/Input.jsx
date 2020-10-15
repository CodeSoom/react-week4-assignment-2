import React from 'react';

export default function Input({
  name, group, address,
  onChangeName, onChangeGroup, onChangeAddress,
  onClick,
}) {
  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="이름"
        onChange={onChangeName}
      />
      <input
        type="text"
        value={group}
        placeholder="분류"
        onChange={onChangeGroup}
      />
      <input
        type="text"
        value={address}
        placeholder="주소"
        onChange={onChangeAddress}
      />
      <button type="button" onClick={onClick}>등록</button>
    </div>
  );
}
