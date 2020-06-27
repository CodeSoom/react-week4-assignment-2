import React from 'react';

export default function Input(
  { registration: { name, type, address }, onChange, onClick },
) {
  return (
    <div>
      <input
        id="input-registration-name"
        type="text"
        placeholder="이름"
        value={name}
        onChange={onChange}
      />
      <input
        id="input-registration-type"
        type="text"
        placeholder="분류"
        value={type}
        onChange={onChange}
      />
      <input
        id="input-registration-address"
        type="text"
        placeholder="주소"
        value={address}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onClick}
      >
        등록
      </button>
    </div>
  );
}
