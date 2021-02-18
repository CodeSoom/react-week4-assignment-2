import React from 'react';

import NameInput from './NameInput';
import TypeInput from './TypeInput';
import AddressInput from './AddressInput';

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
      <AddressInput
        value={address}
        onChange={onChange}
      />
      <button type="button">등록</button>
    </div>
  );
}
