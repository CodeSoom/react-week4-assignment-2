import React from 'react';

export default function Input({
  name,
  type,
  address,
  onChange,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="분류"
        name="type"
        value={type}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="주소"
        name="address"
        value={address}
        onChange={onChange}
      />
    </div>
  );
}
