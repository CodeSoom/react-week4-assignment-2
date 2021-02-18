import React from 'react';

import NameInput from './NameInput';
import TypeInput from './TypeInput';

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
      <TypeInput
        type={type}
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
