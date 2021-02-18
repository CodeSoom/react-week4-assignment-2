import React from 'react';

import NameInput from './NameInput';
import CategoryInput from './CategoryInput';
import AddressInput from './AddressInput';

export default function Input({
  name,
  category,
  address,
  onChange,
  onClick,
}) {
  return (
    <div>
      <NameInput
        name={name}
        onChange={onChange}
      />
      <CategoryInput
        category={category}
        onChange={onChange}
      />
      <AddressInput
        address={address}
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
