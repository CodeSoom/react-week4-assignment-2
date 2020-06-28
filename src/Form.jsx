import React from 'react';

export default function Form({
  nameValue,
  categoryValue,
  addressValue,
  onChangeName,
  onChangeCategory,
  onChangeAddress,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="식당" value={nameValue} onChange={onChangeName} />
      <input type="text" name="category" placeholder="분류" value={categoryValue} onChange={onChangeCategory} />
      <input type="text" name="address" placeholder="주소" value={addressValue} onChange={onChangeAddress} />
      <button type="submit">등록</button>
    </form>
  );
}
