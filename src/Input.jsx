import React from 'react';

import NameInput from './NameInput';

export default function Input({
  name,
  type,
  address,
  onChange,
}) {
  return (
    <div>
      <NameInput
        name={name}
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
      <button type="button">등록</button>
    </div>
  );
}
