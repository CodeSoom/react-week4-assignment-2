import React from 'react';

export default function Input(
  { informations: { name, category, address }, handleChangeInformations },
) {
  return (
    <>
      <input type="text" name="name" value={name} onChange={handleChangeInformations} />
      <input type="text" name="category" value={category} onChange={handleChangeInformations} />
      <input type="text" name="address" value={address} onChange={handleChangeInformations} />
      <button type="button">등록</button>
    </>
  );
}
