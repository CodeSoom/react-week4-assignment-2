import React from 'react';

export default function AddressInput({ address, onChange }) {
  return (
    <input
      type="text"
      placeholder="주소"
      name="address"
      value={address}
      onChange={onChange}
    />
  );
}
